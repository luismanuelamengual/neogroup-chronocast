import {
  ACTIONS_PER_PHASE,
  ALLY_SLOTS,
  MAX_SACRIFICES_PER_PHASE,
  PHASE_LIMIT
} from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { FailReason, MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { CardInstance, MatchState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction, Timeline, WAIT } from '@/app/(protected)/(engine)/models/PlannedAction'
import { opponentOf, PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Speed, SPEEDS } from '@/app/(protected)/(engine)/models/Speed'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { startPhase } from '@/app/(protected)/(engine)/utils/phases'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** One moment of the resolution, for the battle screen to animate: what happened and how the board ended up. */
export interface ResolutionFrame {
  /** The step (0 to 5), or -1 for the end of the phase and the start of the next one. */
  step: number
  speed: Speed | null
  events: MatchEvent[]
  state: MatchState
}

export interface ResolveOptions {
  /** Also return a snapshot after each speed bracket (and after the end of the phase). */
  frames?: boolean
}

/**
 * Resolves a phase (docs/PLAN.md, section 2): the 6 steps in order and, within
 * each step, the actions of both players from the fastest to the slowest.
 * Actions of the same speed are simultaneous (their damage lands together).
 * After each step a fallen hero ends the match (a draw if both fell). When
 * nobody fell, the next phase starts. Pure: returns a new state.
 */
export function resolvePhase(
  state: MatchState,
  timelines: Record<PlayerId, Timeline>,
  options: ResolveOptions = {}
): { state: MatchState; events: MatchEvent[]; frames: ResolutionFrame[] } {
  if (state.status !== 'planning') {
    throw new Error('The match is not waiting for timelines')
  }

  const next = structuredClone(state)
  const engine = new MatchEngine(next)
  const frames: ResolutionFrame[] = []
  let framed = 0

  const frame = (step: number, speed: Speed | null) => {
    if (options.frames && engine.events.length > framed) {
      frames.push({ step, speed, events: engine.events.slice(framed), state: structuredClone(next) })
      framed = engine.events.length
    }
  }

  for (const id of PLAYER_IDS) {
    const idle = (timelines[id] ?? []).every((action) => action.kind === 'wait')

    next.players[id].idlePhases = idle ? next.players[id].idlePhases + 1 : 0
  }

  for (let step = 0; step < ACTIONS_PER_PHASE; step++) {
    next.step = step
    engine.emit({ type: 'step', step })

    const entries = PLAYER_IDS.map((player) => ({ player, action: timelines[player]?.[step] ?? WAIT }))
      .filter(({ action }) => action.kind !== 'wait')
      .map((entry) => ({ ...entry, speed: actionSpeed(engine, entry.player, entry.action) }))

    for (const speed of SPEEDS) {
      const group = entries.filter((entry) => entry.speed === speed)

      if (group.length === 0) {
        continue
      }

      engine.takeSnapshot()

      for (const { player, action } of group) {
        engine.emit({ type: 'action', player, step, action, speed })

        if (engine.player(player).hero.fallen) {
          engine.emit({ type: 'fail', player, step, reason: 'heroFallen' })
          continue
        }

        const reason = performAction(engine, player, action)

        if (reason) {
          engine.emit({ type: 'fail', player, step, reason })
        }
      }

      engine.flush()
      engine.clearSnapshot()
      frame(step, speed)
    }

    if (engine.checkVictory()) {
      break
    }
  }

  if (next.status !== 'finished') {
    for (const id of PLAYER_IDS) {
      engine.dispatch(id, 'onPhaseEnd')
    }

    engine.flush()
    engine.checkVictory()
  }

  if (next.status !== 'finished') {
    if (next.phase >= PHASE_LIMIT) {
      const a = next.players.a.hero.health
      const b = next.players.b.hero.health

      engine.finish(a === b ? null : a > b ? 'a' : 'b', 'phaseLimit')
    } else {
      startPhase(engine)
    }
  }

  next.step = -1
  frame(-1, null)

  return { state: next, events: engine.events, frames }
}

/** The speed an action resolves at. */
export function actionSpeed(engine: MatchEngine, player: PlayerId, action: PlannedAction): Speed {
  switch (action.kind) {
    case 'sacrifice':
    case 'move':
      return 'instant'

    case 'play': {
      const card = findPlayable(engine, player, action.cardUid)

      if (!card) {
        return 'normal'
      }

      const definition = getCard(card.cardId)

      return definition.speed ?? (definition.type === 'trap' ? 'instant' : 'normal')
    }

    case 'allyAttack': {
      const found = engine.findUnit(action.allyUid)

      return found && engine.hasKeyword(found.unit, 'quick') ? 'fast' : 'normal'
    }

    case 'heroAttack': {
      const weapon = engine.player(player).hero.weapon

      return (weapon && getCard(weapon.card.cardId).speed) || 'normal'
    }

    case 'heroAbility':
      return getCard(engine.player(player).hero.cardId).ability?.speed ?? 'normal'

    case 'allyAbility': {
      const found = engine.findUnit(action.allyUid)

      return (found && getCard(found.unit.cardId).ability?.speed) || 'normal'
    }

    default:
      return 'normal'
  }
}

/** A card the player can play: in the hand, or in the discard pile with `resurge`. */
function findPlayable(engine: MatchEngine, player: PlayerId, uid: number): CardInstance | null {
  const side = engine.player(player)
  const inHand = side.hand.find((card) => card.uid === uid)

  if (inHand) {
    return inHand
  }

  const inDiscard = side.discard.find((card) => card.uid === uid)

  return inDiscard && getCard(inDiscard.cardId).keywords?.includes('resurge') ? inDiscard : null
}

function removeCard(engine: MatchEngine, player: PlayerId, uid: number): void {
  const side = engine.player(player)

  side.hand = side.hand.filter((card) => card.uid !== uid)
  side.discard = side.discard.filter((card) => card.uid !== uid)
}

/** Whether the chosen targets fit what the card asks for (checked when it resolves). */
function validTargets(engine: MatchEngine, player: PlayerId, kinds: TargetKind[], targets: SlotRef[]): boolean {
  return kinds.every((kind, index) => {
    const target = targets[index]

    if (!target || (target.slot !== 'hero' && (target.slot < 0 || target.slot >= ALLY_SLOTS))) {
      return false
    }

    const enemy = target.player !== player
    const unit = engine.targetUnit(target)

    switch (kind) {
      case 'enemySlot':
        return enemy && !(unit && engine.hasKeyword(unit, 'stealth'))
      case 'enemyAlly':
        return enemy && !!unit && !engine.hasKeyword(unit, 'stealth')
      case 'friendlyAlly':
        return !enemy && !!unit
      case 'friendlySlot':
        return !enemy
    }
  })
}

/** Runs one action. Returns why it failed, or null. */
function performAction(engine: MatchEngine, player: PlayerId, action: PlannedAction): FailReason | null {
  switch (action.kind) {
    case 'wait':
      return null
    case 'sacrifice':
      return sacrifice(engine, player, action.cardUid)
    case 'play':
      return play(engine, player, action.cardUid, action.slot, action.targets ?? [])
    case 'allyAttack':
      return allyAttack(engine, player, action.allyUid, action.target)
    case 'heroAttack':
      return heroAttack(engine, player, action.target)
    case 'heroAbility':
      return heroAbility(engine, player, action.targets ?? [])
    case 'allyAbility':
      return allyAbility(engine, player, action.allyUid, action.targets ?? [])
    case 'move':
      return move(engine, player, action.allyUid, action.toSlot)
  }
}

function sacrifice(engine: MatchEngine, player: PlayerId, uid: number): FailReason | null {
  const side = engine.player(player)

  if (side.sacrificesThisPhase >= MAX_SACRIFICES_PER_PHASE) {
    return 'sacrificeLimit'
  }

  const card = side.hand.find((candidate) => candidate.uid === uid)

  if (!card) {
    return 'noCard'
  }

  side.hand = side.hand.filter((candidate) => candidate.uid !== uid)
  side.discard.push(card)
  side.sacrificesThisPhase++
  side.chronosCapacity++
  side.chronos++
  engine.emit({ type: 'sacrifice', player, cardId: card.cardId, capacity: side.chronosCapacity })

  return null
}

function play(
  engine: MatchEngine,
  player: PlayerId,
  uid: number,
  slot: number | undefined,
  targets: SlotRef[]
): FailReason | null {
  const side = engine.player(player)
  const card = findPlayable(engine, player, uid)

  if (!card) {
    return 'noCard'
  }

  const definition: CardDefinition = getCard(card.cardId)

  if (side.chronos < definition.cost) {
    return 'notEnoughChronos'
  }

  const pay = () => {
    removeCard(engine, player, uid)
    side.chronos -= definition.cost
    engine.emit({ type: 'play', player, cardId: definition.id })
  }

  switch (definition.type) {
    case 'ally': {
      if (engine.freeSlots(player).length === 0) {
        return 'slotsFull'
      }

      pay()
      engine.summon(player, card, slot)

      return null
    }

    case 'ability':

    case 'item': {
      if (!validTargets(engine, player, definition.targets ?? [], targets)) {
        return 'invalidTarget'
      }

      pay()

      if (definition.type === 'ability' && engine.triggerTrap(opponentOf(player), 'enemyAbility')) {
        side.discard.push(card)

        return 'cancelled'
      }

      definition.onPlay?.(engine.context(player, card, targets))
      side.discard.push(card)

      return null
    }

    case 'weapon': {
      pay()

      if (side.hero.weapon) {
        side.discard.push(side.hero.weapon.card)
      }

      side.hero.weapon = { card, attack: definition.attack ?? 0, durability: definition.durability ?? 1 }
      engine.emit({ type: 'attach', player, cardId: definition.id })
      definition.onPlay?.(engine.context(player, card, targets))

      return null
    }

    case 'armor': {
      pay()

      if (side.hero.armor) {
        side.discard.push(side.hero.armor.card)
      }

      side.hero.armor = { card, reduction: definition.armor ?? 0, durability: definition.durability ?? 1 }
      engine.emit({ type: 'attach', player, cardId: definition.id })
      definition.onPlay?.(engine.context(player, card, targets))

      return null
    }

    case 'location': {
      pay()

      if (side.location) {
        side.discard.push(side.location)
      }

      side.location = card
      engine.emit({ type: 'location', player, cardId: definition.id })
      definition.onPlay?.(engine.context(player, card, targets))

      return null
    }

    case 'attachment': {
      const target = targets[0]
      const host = target ? engine.targetUnit(target) : null

      if (!host || !validTargets(engine, player, definition.targets ?? ['friendlyAlly'], targets)) {
        return 'invalidTarget'
      }

      pay()
      host.attachments = [...(host.attachments ?? []), { uid: card.uid, cardId: card.cardId, owner: player }]

      if (definition.attack || definition.health) {
        engine.buff(host.uid, definition.attack ?? 0, definition.health ?? 0)
      }

      for (const keyword of definition.keywords ?? []) {
        if (!host.keywords.includes(keyword)) {
          host.keywords.push(keyword)
        }

        host.shield ||= keyword === 'shield'
      }

      host.thorns += definition.thorns ?? 0
      engine.emit({ type: 'attach', player, cardId: definition.id, target })
      definition.onPlay?.(engine.context(player, card, targets))

      return null
    }

    case 'artifact': {
      if (engine.freeSupport(player) <= 0) {
        return 'supportFull'
      }

      pay()
      side.artifacts.push({ uid: card.uid, cardId: card.cardId, charges: definition.charges })
      engine.emit({ type: 'artifact', player, cardId: definition.id })
      definition.onPlay?.(engine.context(player, card, targets))

      return null
    }

    case 'trap': {
      if (engine.freeSupport(player) <= 0) {
        return 'supportFull'
      }

      pay()
      side.traps.push(card)
      engine.emit({ type: 'trapSet', player })

      return null
    }

    default:
      return 'noCard'
  }
}

interface Striker {
  ref: SlotRef
  amount: number
  /** The attacking ally (null: the hero). */
  unitUid: number | null
  ranged: boolean
  flying: boolean
  poison: boolean
  lifesteal: boolean
  cleave: boolean
  /** Of the attacking ally or the hero's weapon (none: physical). */
  element?: Element
}

/**
 * An attack against a slot of the rival. Aimed at the hero, a guardian takes
 * it (not a ranged attack, which flies over it). An empty slot (the ally moved away or died) is a miss. Allies don't
 * strike back, except those with `retaliate` against a melee attack; thorns
 * hurt the attacker either way.
 */
function strike(engine: MatchEngine, striker: Striker, target: SlotRef): void {
  const enemy = target.player
  const guardian = target.slot === 'hero' && !striker.ranged ? engine.guardianOf(enemy) : null
  const aimed: SlotRef = guardian == null ? target : { player: enemy, slot: guardian }
  const source = {
    player: striker.ref.player,
    poison: striker.poison,
    lifesteal: striker.lifesteal,
    element: striker.element
  }
  const hitAttacker = (amount: number, element?: Element) =>
    striker.unitUid == null
      ? engine.damageHero(striker.ref.player, amount, { player: enemy, element })
      : engine.damageUnit(striker.unitUid, amount, { player: enemy, element })

  if (aimed.slot === 'hero') {
    engine.emit({ type: 'attack', attacker: striker.ref, target: aimed })
    engine.damageHero(enemy, striker.amount, source)

    return
  }

  const unit = engine.targetUnit(aimed)

  if (
    !unit ||
    engine.hasKeyword(unit, 'stealth') ||
    (engine.hasKeyword(unit, 'flying') && !striker.flying && !striker.ranged)
  ) {
    engine.emit({ type: 'miss', attacker: striker.ref, target: aimed })

    return
  }

  engine.emit({ type: 'attack', attacker: striker.ref, target: aimed })
  engine.damageUnit(unit.uid, striker.amount, source)

  if (!striker.ranged && engine.hasKeyword(unit, 'retaliate')) {
    hitAttacker(engine.attackOf(unit), getCard(unit.cardId).element)
  }

  if (unit.thorns > 0 && engine.hasKeyword(unit, 'thorns')) {
    hitAttacker(unit.thorns)
  }

  if (striker.cleave) {
    for (const slot of [aimed.slot - 1, aimed.slot + 1]) {
      engine.damage({ player: enemy, slot }, striker.amount, source)
    }
  }
}

/** Whether an ally can act: from the phase after it entered (with `charge`, from the next step). */
function isReady(engine: MatchEngine, unit: Unit): boolean {
  const state = engine.state

  return (
    unit.enteredPhase < state.phase ||
    (engine.hasKeyword(unit, 'charge') && unit.enteredPhase === state.phase && unit.enteredStep < state.step)
  )
}

function allyAttack(engine: MatchEngine, player: PlayerId, uid: number, target: SlotRef): FailReason | null {
  const found = engine.findUnit(uid)

  if (!found || found.player !== player) {
    return 'noUnit'
  }

  const { unit, slot } = found

  if (engine.isStunned(unit)) {
    return engine.isFrozen(unit) ? 'frozen' : 'stunned'
  }

  if (!isReady(engine, unit)) {
    return 'notReady'
  }

  if (engine.isRestrained(unit, 'disarms')) {
    return 'cantAttack'
  }

  if (unit.abilityUsedThisPhase) {
    return 'exhausted'
  }

  if (unit.attacksThisPhase >= (engine.hasKeyword(unit, 'frenzy') ? 2 : 1)) {
    return 'alreadyAttacked'
  }

  if (target.player === player) {
    return 'invalidTarget'
  }

  unit.attacksThisPhase++

  if (engine.triggerTrap(target.player, 'enemyAttack', { player, slot })) {
    return 'cancelled'
  }

  // The trap may have killed or stunned it.
  if (unit.health <= 0 || engine.isStunned(unit) || !engine.findUnit(uid)) {
    return 'cancelled'
  }

  unit.keywords = unit.keywords.filter((keyword) => keyword !== 'stealth')

  for (const attachment of unit.attachments ?? []) {
    getCard(attachment.cardId).onHostAttack?.(engine.context(attachment.owner ?? player, attachment), unit)
  }

  getCard(unit.cardId).onAttack?.(engine.context(player, unit), target)
  strike(
    engine,
    {
      ref: { player, slot },
      amount: engine.attackOf(unit),
      unitUid: unit.uid,
      ranged: engine.hasKeyword(unit, 'ranged'),
      flying: engine.hasKeyword(unit, 'flying'),
      poison: engine.hasKeyword(unit, 'poison'),
      lifesteal: engine.hasKeyword(unit, 'lifesteal'),
      cleave: engine.hasKeyword(unit, 'cleave'),
      element: getCard(unit.cardId).element
    },
    target
  )

  return null
}

function heroAttack(engine: MatchEngine, player: PlayerId, target: SlotRef): FailReason | null {
  const hero = engine.player(player).hero

  if (!hero.weapon) {
    return 'noWeapon'
  }

  if (engine.isFrozen(hero)) {
    return 'frozen'
  }

  if (hero.attackedThisPhase) {
    return 'alreadyAttacked'
  }

  if (target.player === player) {
    return 'invalidTarget'
  }

  const weapon = hero.weapon
  const keywords = getCard(weapon.card.cardId).keywords ?? []

  hero.attackedThisPhase = true
  strike(
    engine,
    {
      ref: { player, slot: 'hero' },
      amount: weapon.attack,
      unitUid: null,
      ranged: keywords.includes('ranged'),
      flying: keywords.includes('flying'),
      poison: keywords.includes('poison'),
      lifesteal: keywords.includes('lifesteal'),
      cleave: keywords.includes('cleave'),
      element: getCard(weapon.card.cardId).element
    },
    target
  )

  weapon.durability--

  if (weapon.durability <= 0) {
    engine.player(player).discard.push(weapon.card)
    hero.weapon = null
  }

  return null
}

function heroAbility(engine: MatchEngine, player: PlayerId, targets: SlotRef[]): FailReason | null {
  const side = engine.player(player)
  const ability = getCard(side.hero.cardId).ability

  if (!ability) {
    return 'noAbility'
  }

  if (side.hero.abilityUsedThisPhase) {
    return 'abilityUsed'
  }

  if (engine.isFrozen(side.hero)) {
    return 'frozen'
  }

  // A hero's ability is paid with energy.
  if ((side.energy ?? 0) < ability.cost) {
    return 'notEnoughEnergy'
  }

  if (!validTargets(engine, player, ability.targets ?? [], targets)) {
    return 'invalidTarget'
  }

  engine.gainEnergy(player, -ability.cost, false)
  side.hero.abilityUsedThisPhase = true

  if (engine.triggerTrap(opponentOf(player), 'enemyAbility')) {
    return 'cancelled'
  }

  ability.activate(engine.context(player, side.hero, targets))

  return null
}

function allyAbility(engine: MatchEngine, player: PlayerId, uid: number, targets: SlotRef[]): FailReason | null {
  const found = engine.findUnit(uid)

  if (!found || found.player !== player) {
    return 'noUnit'
  }

  const { unit } = found
  const ability = getCard(unit.cardId).ability
  const side = engine.player(player)

  if (!ability) {
    return 'noAbility'
  }

  if (engine.isStunned(unit)) {
    return engine.isFrozen(unit) ? 'frozen' : 'stunned'
  }

  if (!isReady(engine, unit)) {
    return 'notReady'
  }

  if (engine.isRestrained(unit, 'silences')) {
    return 'silenced'
  }

  if (unit.abilityUsedThisPhase) {
    return 'abilityUsed'
  }

  if (unit.attacksThisPhase > 0) {
    return 'exhausted'
  }

  const energy = ability.resource === 'energy'

  if (energy ? (side.energy ?? 0) < ability.cost : side.chronos < ability.cost) {
    return energy ? 'notEnoughEnergy' : 'notEnoughChronos'
  }

  if (!validTargets(engine, player, ability.targets ?? [], targets)) {
    return 'invalidTarget'
  }

  if (energy) {
    engine.gainEnergy(player, -ability.cost, false)
  } else {
    side.chronos -= ability.cost
  }

  unit.abilityUsedThisPhase = true

  if (engine.triggerTrap(opponentOf(player), 'enemyAbility')) {
    return 'cancelled'
  }

  ability.activate(engine.context(player, unit, targets))

  return null
}

function move(engine: MatchEngine, player: PlayerId, uid: number, toSlot: number): FailReason | null {
  const found = engine.findUnit(uid)

  if (!found || found.player !== player) {
    return 'noUnit'
  }

  if (engine.isStunned(found.unit)) {
    return 'stunned'
  }

  return engine.moveAlly(uid, toSlot) ? null : 'invalidTarget'
}
