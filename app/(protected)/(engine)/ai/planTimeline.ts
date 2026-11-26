import { ACTIONS_PER_PHASE, MAX_SACRIFICES_PER_PHASE, SUPPORT_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { CardInstance, MatchState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction, Timeline, WAIT } from '@/app/(protected)/(engine)/models/PlannedAction'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { isRangedWeapon } from '@/app/(protected)/(engine)/models/Subtype'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { attachedOptions } from '@/app/(protected)/(engine)/utils/attachedTargets'
import { cardCost } from '@/app/(protected)/(engine)/utils/boons'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { projectTimeline } from '@/app/(protected)/(engine)/utils/projectTimeline'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** Hero abilities used before the cards: they put cards in play for free or make them cheaper. */
const EARLY_ABILITY_TAGS = ['summonHand', 'deckArtifact', 'allyDiscount']
/** Above this capacity the computer stops turning cards into Chronos. */
const SACRIFICE_UNTIL_CAPACITY = 8

/**
 * How a timeline is built. The greedy planner always uses the default; the
 * higher levels (ai/chooseTimeline.ts) build one timeline per style and keep
 * the one whose simulated result scores best.
 */
export interface PlanStyle {
  /** Turn a card of the hand into Chronos. */
  sacrifice: boolean
  /** Which cards to play first: the most valuable, the cheapest, or none. */
  cards: 'value' | 'cheap' | 'none'
  ability: boolean
  /** Attacks: kill what can be killed safely (the hero otherwise), always the hero, or none. */
  attack: 'trade' | 'face' | 'none'
  /** Defensive cards (guardians, heals, armor) first when the hero is under pressure. */
  defense: boolean
}

export const GREEDY: PlanStyle = { sacrifice: true, cards: 'value', ability: true, attack: 'trade', defense: false }

/**
 * The computer player, first version (docs/PLAN.md, section 13.3): a greedy
 * planner. It generates Chronos, plays the most valuable cards it can afford,
 * uses its hero ability (and its allies' when they beat their attack), and attacks (killing what it can kill without dying,
 * the hero otherwise). Each action is checked with the projection, so it never
 * programs something that would fail on its own. Deterministic: the same state
 * always gives the same timeline.
 */
export function planTimeline(state: MatchState, player: PlayerId, style: PlanStyle = GREEDY): Timeline {
  const side = state.players[player]
  const timeline: PlannedAction[] = []
  const used = new Set<number>()

  const tryAdd = (action: PlannedAction): boolean => {
    if (timeline.length >= ACTIONS_PER_PHASE) {
      return false
    }

    const candidate = [...timeline, action]
    const padded = [...candidate, ...Array.from({ length: ACTIONS_PER_PHASE - candidate.length }, () => WAIT)]
    const { failures } = projectTimeline(state, player, padded)

    if (failures.some((failure) => failure.step === candidate.length - 1)) {
      return false
    }

    timeline.push(action)

    return true
  }

  // 1. Chronos: the least useful card of the hand.
  let budget = side.chronos

  if (
    style.sacrifice &&
    side.sacrificesThisPhase < MAX_SACRIFICES_PER_PHASE &&
    side.chronosCapacity < SACRIFICE_UNTIL_CAPACITY
  ) {
    const fodder = pickSacrifice(side.hand, side.chronosCapacity + 1)

    if (fodder && tryAdd({ kind: 'sacrifice', cardUid: fodder.uid })) {
      used.add(fodder.uid)
      budget++
    }
  }

  // 2. Cards, the most valuable first.
  const pressed = style.defense && underPressure(state, player)
  const playable = side.hand
    .filter((card) => style.cards !== 'none' && !used.has(card.uid))
    .map((card) => ({ card, definition: getCard(card.cardId) }))
    .sort(
      (a, b) =>
        (pressed ? defensive(b.definition) - defensive(a.definition) : 0) ||
        (style.cards === 'cheap'
          ? a.definition.cost - b.definition.cost || value(b.definition) - value(a.definition)
          : value(b.definition) - value(a.definition) || b.definition.cost - a.definition.cost)
    )
  // The hero ability is paid with energy, so the Chronos all go to the cards.
  const heroAbility = getCard(side.hero.cardId).ability
  let energy = side.energy ?? 0
  let freeSlots = side.allies.filter((unit) => !unit).length
  let hasWeapon = !!side.hero.weapon
  let hasArmor = !!side.hero.armor
  let support = side.traps.length + (side.artifacts ?? []).length

  const programHeroAbility = () => {
    if (
      style.ability &&
      heroAbility &&
      heroAbility.cost <= energy &&
      !side.hero.abilityUsedThisPhase &&
      worthCasting(state, player, heroAbility)
    ) {
      const targets = chooseTargets(state, player, heroAbility.targets ?? [])
      const cardId = heroAbility.choice ? chooseFromDeck(state, player) : undefined

      if (targets && (!heroAbility.choice || cardId) && tryAdd({ kind: 'heroAbility', targets, cardId })) {
        energy -= heroAbility.cost
      }
    }
  }

  const early = (heroAbility?.ai?.tags ?? []).some((tag) => EARLY_ABILITY_TAGS.includes(tag))

  if (early) {
    programHeroAbility()
  }

  for (const { card, definition } of playable) {
    if (cardCost(state, player, definition) > budget || timeline.length >= ACTIONS_PER_PHASE - 1) {
      continue
    }

    let action: PlannedAction | null = null

    switch (definition.type) {
      case 'ally':
        action =
          freeSlots > 0 ? { kind: 'play', cardUid: card.uid, slot: side.allies.findIndex((unit) => !unit) } : null
        break
      case 'weapon':
        action = hasWeapon ? null : { kind: 'play', cardUid: card.uid }
        break
      case 'armor':
        action = hasArmor ? null : { kind: 'play', cardUid: card.uid }
        break
      case 'location':
        action = side.location ? null : { kind: 'play', cardUid: card.uid }
        break
      case 'trap':
        action = support < SUPPORT_SLOTS ? { kind: 'play', cardUid: card.uid } : null
        break
      case 'artifact':
        action = support < SUPPORT_SLOTS ? { kind: 'play', cardUid: card.uid } : null
        break
      case 'attachment':
      case 'ability':

      case 'item': {
        if (!worthCasting(state, player, definition)) {
          break
        }

        const targets = chooseTargets(state, player, definition.targets ?? [])

        action = targets ? { kind: 'play', cardUid: card.uid, targets } : null
        break
      }
    }

    if (action && tryAdd(action)) {
      budget -= cardCost(state, player, definition)
      used.add(card.uid)
      freeSlots -= definition.type === 'ally' ? 1 : 0
      hasWeapon ||= definition.type === 'weapon'
      hasArmor ||= definition.type === 'armor'
      support += definition.type === 'trap' || definition.type === 'artifact' ? 1 : 0
    }
  }

  // 3. Hero ability (before the cards when it saves Chronos for them).
  if (!early) {
    programHeroAbility()
  }

  // 4. Ally abilities: an ally uses its ability instead of attacking when the ability is worth more than its hit.
  const ready = side.allies.filter((unit): unit is Unit => !!unit && unit.enteredPhase < state.phase)
  const acted = new Set<number>()

  if (style.ability) {
    for (const unit of ready) {
      const ability = getCard(unit.cardId).ability
      const paidWithEnergy = ability?.resource === 'energy'

      if (
        !ability ||
        unit.abilityUsedThisPhase ||
        ability.cost > (paidWithEnergy ? energy : budget) ||
        unit.attack + unit.tempAttack > abilityWorth(ability.cost)
      ) {
        continue
      }

      const targets = chooseTargets(state, player, ability.targets ?? [])

      if (targets && tryAdd({ kind: 'allyAbility', allyUid: unit.uid, targets })) {
        if (paidWithEnergy) {
          energy -= ability.cost
        } else {
          budget -= ability.cost
        }

        acted.add(unit.uid)
      }
    }
  }

  // 4b. Artifact abilities: they don't take an ally's attack, so each one that is worth it now is used.
  if (style.ability) {
    const engine = new MatchEngine(state)

    for (const artifact of side.artifacts ?? []) {
      const ability = getCard(artifact.cardId).ability
      const paidWithEnergy = ability?.resource === 'energy'

      if (
        !ability ||
        artifact.abilityUsedThisPhase ||
        ability.cost > (paidWithEnergy ? energy : budget) ||
        !worthCasting(state, player, ability)
      ) {
        continue
      }

      const targets = chooseTargets(state, player, ability.targets ?? [])

      if (!targets || ability.canActivate?.(engine.context(player, artifact, targets))) {
        continue
      }

      if (tryAdd({ kind: 'artifactAbility', artifactUid: artifact.uid, targets })) {
        if (paidWithEnergy) {
          energy -= ability.cost
        } else {
          budget -= ability.cost
        }
      }
    }
  }

  // 5. Attacks: the ready allies (the ones that didn't use their ability) and the hero's weapon.
  const enemyHero: SlotRef = { player: opponentOf(player), slot: 'hero' }

  if (style.attack !== 'none') {
    for (const unit of ready.filter((candidate) => !acted.has(candidate.uid)).sort((a, b) => b.attack - a.attack)) {
      const target =
        style.attack === 'face'
          ? enemyHero
          : chooseAttackTarget(
              state,
              player,
              unit.attack + unit.tempAttack,
              unit.health,
              unit.keywords.includes('ranged')
            )

      tryAdd({ kind: 'allyAttack', allyUid: unit.uid, target })
    }

    if (side.hero.weapon && !side.hero.attackedThisPhase) {
      tryAdd({
        kind: 'heroAttack',
        target:
          style.attack === 'face'
            ? enemyHero
            : chooseAttackTarget(
                state,
                player,
                side.hero.weapon.attack,
                side.hero.health,
                (getCard(side.hero.weapon.card.cardId).keywords ?? []).includes('ranged') ||
                  isRangedWeapon(getCard(side.hero.weapon.card.cardId))
              )
      })
    }
  }

  while (timeline.length < ACTIONS_PER_PHASE) {
    timeline.push(WAIT)
  }

  return timeline
}

/** Roughly how much damage an ally ability of this cost is worth (to compare it with the ally's attack). */
function abilityWorth(cost: number): number {
  return 4 + cost * 4
}

function value(card: CardDefinition): number {
  return card.ai?.value ?? card.cost
}

/** How much a card helps to hold on: guardians, heals and armor. */
function defensive(card: CardDefinition): number {
  const tags = card.ai?.tags ?? []

  return (
    (card.keywords?.includes('guardian') ? 2 : 0) +
    (tags.includes('heal') || tags.includes('defense') ? 1 : 0) +
    (card.type === 'armor' ? 1 : 0)
  )
}

/** The hero is below half its health, or the enemy board hits harder than its own. */
function underPressure(state: MatchState, player: PlayerId): boolean {
  const side = state.players[player]
  const power = (id: PlayerId) => state.players[id].allies.reduce((sum, unit) => sum + (unit ? unit.attack : 0), 0)

  return side.hero.health < side.hero.maxHealth / 2 || power(opponentOf(player)) > power(player)
}

/** The most valuable artifact of the deck (an ability that puts one in play), or undefined. */
function chooseFromDeck(state: MatchState, player: PlayerId): string | undefined {
  const artifacts = state.players[player].deck
    .map((card) => getCard(card.cardId))
    .filter((definition) => definition.type === 'artifact')
    .sort((a, b) => value(b) - value(a) || b.cost - a.cost)

  return artifacts[0]?.id
}

/** The card to turn into Chronos: one it can't afford for a while, or the least valuable. */
function pickSacrifice(hand: CardInstance[], capacity: number): CardInstance | null {
  if (hand.length === 0) {
    return null
  }

  const scored = hand.map((card) => {
    const definition = getCard(card.cardId)
    const unaffordable = definition.cost > capacity + 2 ? 2 : 0

    return { card, score: value(definition) - unaffordable - definition.cost * 0.1 }
  })

  return scored.sort((a, b) => a.score - b.score)[0].card
}

/** Whether an ability or item would do something useful now. */
/** Whether a card or an ability is worth it now (its `ai.tags` tell what it needs to not be wasted). */
function worthCasting(
  state: MatchState,
  player: PlayerId,
  card: { targets?: TargetKind[]; ai?: { tags?: string[] } }
): boolean {
  const side = state.players[player]
  const enemyAllies = state.players[opponentOf(player)].allies.filter(Boolean).length
  const tags = card.ai?.tags ?? []

  if (tags.includes('heal')) {
    return side.hero.maxHealth - side.hero.health >= 15
  }

  if (tags.includes('repair')) {
    return !!side.hero.weapon || !!side.hero.armor
  }

  if (tags.includes('antiArmor')) {
    return !!state.players[opponentOf(player)].hero.armor
  }

  if (tags.includes('antiGear')) {
    const rival = state.players[opponentOf(player)]

    return !!rival.hero.weapon || !!rival.hero.armor || (rival.artifacts ?? []).length > 0
  }

  if (tags.includes('revive')) {
    const hasAlly = side.discard.some((candidate) => getCard(candidate.cardId).type === 'ally')

    return hasAlly && side.allies.some((unit) => !unit)
  }

  if (tags.includes('buffAll')) {
    return side.allies.filter(Boolean).length >= 2
  }

  if (tags.includes('recharge')) {
    return (side.artifacts ?? []).some((artifact) => artifact.charges != null)
  }

  if (tags.includes('panoply')) {
    return !!side.hero.weapon && !!side.hero.armor
  }

  if (tags.includes('sacrifice')) {
    return side.allies.some(Boolean)
  }

  if (!card.targets?.length && tags.includes('removal')) {
    return enemyAllies >= 2
  }

  return true
}

/** Targets for a card or ability: the strongest enemy ally, or the enemy hero. */
function chooseTargets(state: MatchState, player: PlayerId, kinds: TargetKind[]): SlotRef[] | null {
  const enemy = opponentOf(player)
  const targets: SlotRef[] = []

  for (const kind of kinds) {
    const enemies = allyRefs(state, enemy).filter(({ unit }) => !unit.keywords.includes('stealth'))
    const friends = allyRefs(state, player)

    switch (kind) {
      case 'enemyAlly':
        if (enemies.length === 0) {
          return null
        }

        targets.push(enemies.sort((a, b) => b.unit.attack - a.unit.attack)[0].ref)
        break

      case 'enemySlot': {
        // Several targets of the same ability go to different slots: the strongest allies, then the hero.
        const options: SlotRef[] = [
          ...enemies.sort((a, b) => b.unit.attack - a.unit.attack).map(({ ref }) => ref),
          { player: enemy, slot: 'hero' }
        ]
        const free = options.find(
          (ref) => !targets.some((taken) => taken.player === ref.player && taken.slot === ref.slot)
        )

        if (!free) {
          return null
        }

        targets.push(free)
        break
      }

      case 'friendlyAlly':
        if (friends.length === 0) {
          return null
        }

        targets.push(friends.sort((a, b) => b.unit.attack - a.unit.attack)[0].ref)
        break
      case 'friendlySlot':
        targets.push({ player, slot: 'hero' })
        break

      case 'enemyGear':

      case 'enemyAttachment': {
        const best = bestAttached(state, player, kind)

        if (!best) {
          return null
        }

        targets.push(best)
        break
      }

      case 'enemyArtifact':

      case 'friendlyArtifact': {
        const best = bestSupport(state, player, kind)

        if (!best) {
          return null
        }

        targets.push(best)
        break
      }
    }
  }

  return targets
}

/**
 * The support card to aim at: the rival's most expensive artifact (its traps
 * after them), or, of its own, the artifact about to run out of uses (else the
 * most expensive one: scrapping it gives more).
 */
function bestSupport(state: MatchState, player: PlayerId, kind: TargetKind): SlotRef | null {
  const options = attachedOptions(state, player, kind)

  const score = (option: (typeof options)[number]) => {
    const cost = getCard(option.card.cardId).cost

    if (kind === 'enemyArtifact') {
      return (option.kind === 'artifact' ? 10 : 0) + cost
    }

    return (option.card.charges === 1 ? 10 : 0) + cost
  }

  return [...options].sort((a, b) => score(b) - score(a))[0]?.ref ?? null
}

/**
 * Kill an enemy ally that would not kill the attacker back (only allies with
 * retaliate strike back, and not at ranged attackers); otherwise go for the hero.
 */
function chooseAttackTarget(
  state: MatchState,
  player: PlayerId,
  attack: number,
  health: number,
  ranged: boolean
): SlotRef {
  const enemy = opponentOf(player)
  const strikesBack = (unit: Unit) => !ranged && unit.keywords.includes('retaliate')
  const kills = allyRefs(state, enemy)
    .filter(({ unit }) => !unit.keywords.includes('stealth') && !unit.keywords.includes('flying'))
    .filter(({ unit }) => unit.health <= attack && !unit.shield && (!strikesBack(unit) || unit.attack < health))
    .sort((a, b) => b.unit.attack - a.unit.attack)

  return kills[0]?.ref ?? { player: enemy, slot: 'hero' }
}

/**
 * The rival's attached card most worth breaking: the weapon (by the damage it
 * has left), the armor (by what it would block) or what helps one of its
 * allies (never an attachment of this player, like a curse on them).
 */
function bestAttached(state: MatchState, player: PlayerId, kind: TargetKind): SlotRef | null {
  const hero = state.players[opponentOf(player)].hero
  const scored = attachedOptions(state, player, kind)
    .map((option) => {
      const definition = getCard(option.card.cardId)

      switch (option.kind) {
        case 'weapon':
          return { option, score: (hero.weapon?.attack ?? 0) * (hero.weapon?.durability ?? 0) }
        case 'armor':
          return { option, score: (hero.armor?.reduction ?? 0) * (hero.armor?.durability ?? 0) }
        default:
          return {
            option,
            score:
              (option.card.owner ?? option.ref.player) === player
                ? -1
                : (definition.attack ?? 0) * 2 + (definition.health ?? 0) + (definition.keywords?.length ?? 0) * 2
          }
      }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)

  return scored[0]?.option.ref ?? null
}

function allyRefs(state: MatchState, player: PlayerId): { ref: SlotRef; unit: Unit }[] {
  return state.players[player].allies.flatMap((unit, slot) => (unit ? [{ ref: { player, slot }, unit }] : []))
}
