import { ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { EffectContext } from '@/app/(protected)/(engine)/models/EffectContext'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { BoonKind, CardInstance, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Tribe } from '@/app/(protected)/(engine)/models/Tribe'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/**
 * The building blocks of the card logic. A common card is usually one or two
 * of these calls; a mythic one can combine them with logic of its own. Damage
 * lands when the current speed bracket ends (simultaneous with the rival's).
 */

/** The element of the damage a card deals: the one given, else the card's own (none: physical). */
export function elementOf(ctx: EffectContext, element?: Element | null): Element | undefined {
  return element === null ? undefined : (element ?? getCard(ctx.self.cardId).element)
}

/**
 * The damage of a card's logic: a spell (docs/FACTIONS.md) adds its owner's
 * spell power. Nothing to add to 0 damage (an effect that deals none).
 */
function spellDamage(ctx: EffectContext, amount: number): number {
  return ctx.spell && amount > 0 ? amount + ctx.engine.spellPower(ctx.owner) : amount
}

/** An ice spell of an owner with `freezingSpells` in play also freezes what it damaged. */
function spellFreeze(ctx: EffectContext, target: SlotRef, element: Element | undefined): void {
  if (
    ctx.spell &&
    element === 'ice' &&
    ctx.engine.inPlay(ctx.owner).some((card) => getCard(card.cardId).freezingSpells)
  ) {
    // Once the damage landed (frozen first, ice would deal it double), wherever the ally is then.
    const unit = target.slot === 'hero' ? null : ctx.engine.targetUnit(target)

    ctx.engine.afterDamage(() => {
      const ref = unit ? slotOf(ctx, unit) : target

      if (ref) {
        ctx.engine.afflict(ref, 'freeze', 1)
      }
    })
  }
}

/** Damage to a slot (an empty one does nothing), of the card's element unless another is given. */
export function damage(ctx: EffectContext, target: SlotRef, amount: number, element?: Element | null): void {
  const kind = elementOf(ctx, element)

  if (ctx.engine.damage(target, spellDamage(ctx, amount), { player: ctx.owner, element: kind })) {
    spellFreeze(ctx, target, kind)
  }
}

/** Damage to every ally of a side. */
export function damageAllAllies(ctx: EffectContext, player: PlayerId, amount: number, element?: Element | null): void {
  const kind = elementOf(ctx, element)

  for (const unit of ctx.engine.allies(player)) {
    ctx.engine.damageUnit(unit.uid, spellDamage(ctx, amount), { player: ctx.owner, element: kind })

    const ref = slotOf(ctx, unit)

    if (ref) {
      spellFreeze(ctx, ref, kind)
    }
  }
}

export function heal(ctx: EffectContext, target: SlotRef, amount: number): void {
  ctx.engine.heal(target, amount)
}

/** Heals every ally of a side. */
export function healAllAllies(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.player(player).allies.forEach((unit, slot) => {
    if (unit) {
      ctx.engine.heal({ player, slot }, amount)
    }
  })
}

export function draw(ctx: EffectContext, player: PlayerId, count: number): void {
  ctx.engine.draw(player, count)
}

/** Permanent +attack / +health. */
export function buff(ctx: EffectContext, unit: Unit, attack: number, health: number): void {
  ctx.engine.buff(unit.uid, attack, health)
}

/** +attack until the end of the phase. */
export function buffThisPhase(ctx: EffectContext, unit: Unit, attack: number): void {
  ctx.engine.tempBuff(unit.uid, attack)
}

export function gainChronos(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.gainChronos(player, amount)
}

/** The ally can't act for the rest of the phase (and `extraPhases` more). */
export function stun(ctx: EffectContext, unit: Unit, extraPhases = 0): void {
  ctx.engine.stun(unit.uid, extraPhases)
}

export function destroy(ctx: EffectContext, unit: Unit): void {
  ctx.engine.destroy(unit.uid)
}

/** The ally in a slot (the one there when the current speed bracket started). */
export function unitAt(ctx: EffectContext, target: SlotRef): Unit | null {
  return ctx.engine.targetUnit(target)
}

/** The ally whose logic is running (null for cards that are not allies, or after it died). */
export function self(ctx: EffectContext): Unit | null {
  return ctx.engine.findUnit(ctx.self.uid)?.unit ?? null
}

/** The allies next to the one whose logic is running. */
export function neighbors(ctx: EffectContext): Unit[] {
  const found = ctx.engine.findUnit(ctx.self.uid)

  if (!found) {
    return []
  }

  return [found.slot - 1, found.slot + 1].flatMap((slot) => {
    const unit = slot >= 0 ? ctx.engine.unitAt(found.player, slot) : null

    return unit ? [unit] : []
  })
}

export function alliesOf(ctx: EffectContext, player: PlayerId): Unit[] {
  return ctx.engine.allies(player)
}

/** A random ally of a side (null when it has none). */
export function randomAlly(ctx: EffectContext, player: PlayerId): Unit | null {
  const allies = ctx.engine.allies(player)

  return allies.length === 0 ? null : allies[Math.floor(ctx.random() * allies.length)]
}

/** Where an ally is on the board. */
export function slotOf(ctx: EffectContext, unit: Unit): SlotRef | null {
  const found = ctx.engine.findUnit(unit.uid)

  return found ? { player: found.player, slot: found.slot } : null
}

/** Brings back to the board a random ally of the discard pile. */
export function reviveFromDiscard(ctx: EffectContext, player: PlayerId): Unit | null {
  const side = ctx.engine.player(player)
  const allies = side.discard.filter((card) => getCard(card.cardId).type === 'ally')

  if (allies.length === 0 || ctx.engine.freeSlots(player).length === 0) {
    return null
  }

  const card = allies[Math.floor(ctx.random() * allies.length)]

  side.discard = side.discard.filter((candidate) => candidate.uid !== card.uid)

  return ctx.engine.summon(player, card)
}

/** Takes control of an enemy ally until the end of the next phase (a contract). False when it can't. */
export function takeControl(ctx: EffectContext, target: SlotRef | undefined, phases = 1): boolean {
  const unit = target ? unitAt(ctx, target) : null

  return !!unit && ctx.engine.takeControl(ctx.owner, unit.uid, phases)
}

/** Returns an ally to its owner's hand. */
export function returnToHand(ctx: EffectContext, unit: Unit): void {
  const found = ctx.engine.findUnit(unit.uid)

  if (!found) {
    return
  }

  // An ally under contract goes back to its owner's hand.
  const owner = found.unit.contract?.owner ?? found.player

  ctx.engine.player(found.player).allies[found.slot] = null
  delete found.unit.contract
  ctx.engine.dropAttachments(owner, found.unit, false)
  ctx.engine.addToHand(owner, { uid: unit.uid, cardId: unit.cardId })
  ctx.engine.emit({ type: 'returnToHand', player: owner, cardId: unit.cardId })
}

/** The card of an ally on the board (its faction, type, keywords...). */
export function cardOf(unit: Unit): CardDefinition {
  return getCard(unit.cardId)
}

/** Damage to an ally, wherever it is now. */
export function damageAlly(ctx: EffectContext, unit: Unit, amount: number, element?: Element | null): void {
  const kind = elementOf(ctx, element)
  const ref = slotOf(ctx, unit)

  ctx.engine.damageUnit(unit.uid, spellDamage(ctx, amount), { player: ctx.owner, element: kind })

  if (ref) {
    spellFreeze(ctx, ref, kind)
  }
}

/** Damage to a random ally of a side (none when it has no allies). */
export function damageRandomAlly(
  ctx: EffectContext,
  player: PlayerId,
  amount: number,
  element?: Element | null
): Unit | null {
  const unit = randomAlly(ctx, player)

  if (unit) {
    damageAlly(ctx, unit, amount, element)
  }

  return unit
}

/** The allies of a side gain attack and health (`others`: all but the one whose logic runs). */
export function buffAllies(ctx: EffectContext, player: PlayerId, attack: number, health: number, others = false): void {
  for (const unit of alliesOf(ctx, player)) {
    if (!others || unit.uid !== ctx.self.uid) {
      buff(ctx, unit, attack, health)
    }
  }
}

/** Summons a new copy of a card in a free slot (none when the board is full). */
export function summonCard(ctx: EffectContext, player: PlayerId, cardId: string): Unit | null {
  return ctx.engine.summon(player, ctx.engine.newCard(cardId))
}

/** Adds a new copy of a card to a hand. */
export function addCardToHand(ctx: EffectContext, player: PlayerId, cardId: string): void {
  ctx.engine.addToHand(player, ctx.engine.newCard(cardId))
}

/** How many cards a side has in its discard pile. */
export function discardSize(ctx: EffectContext, player: PlayerId): number {
  return ctx.engine.player(player).discard.length
}

/** Destroys the weakest other ally of the owner (the void's sacrifice). False when it has none. */
export function sacrificeAlly(ctx: EffectContext): boolean {
  const victim = alliesOf(ctx, ctx.owner)
    .filter((unit) => unit.uid !== ctx.self.uid)
    .sort((a, b) => a.attack + a.health - (b.attack + b.health))[0]

  if (!victim) {
    return false
  }

  destroy(ctx, victim)

  return true
}

/** How many allies of a faction a side has on the board. */
export function factionAllies(ctx: EffectContext, player: PlayerId, faction: string): number {
  return alliesOf(ctx, player).filter((unit) => cardOf(unit).faction === faction).length
}

/** The ally whose logic runs gains attack and health. */
export function buffSelf(ctx: EffectContext, attack: number, health: number): void {
  const unit = self(ctx)

  if (unit) {
    buff(ctx, unit, attack, health)
  }
}

/** The ally in a slot gains attack and health. */
export function buffAt(ctx: EffectContext, target: SlotRef, attack: number, health: number): void {
  const unit = unitAt(ctx, target)

  if (unit) {
    buff(ctx, unit, attack, health)
  }
}

/** The ally in a slot gains attack until the end of the phase. */
export function buffThisPhaseAt(ctx: EffectContext, target: SlotRef, attack: number): void {
  const unit = unitAt(ctx, target)

  if (unit) {
    buffThisPhase(ctx, unit, attack)
  }
}

/** Stuns the ally in a slot (a missing slot, as a trap without an ally, does nothing). */
export function stunAt(ctx: EffectContext, target: SlotRef | undefined, extraPhases = 0): void {
  const unit = target ? unitAt(ctx, target) : null

  if (unit) {
    stun(ctx, unit, extraPhases)
  }
}

/** Stuns a random ally of a side. */
export function stunRandomAlly(ctx: EffectContext, player: PlayerId, extraPhases = 0): void {
  const unit = randomAlly(ctx, player)

  if (unit) {
    stun(ctx, unit, extraPhases)
  }
}

/** Destroys the ally in a slot. */
export function destroyAt(ctx: EffectContext, target: SlotRef | undefined): void {
  const unit = target ? unitAt(ctx, target) : null

  if (unit) {
    destroy(ctx, unit)
  }
}

/** Returns the ally in a slot to its owner's hand. */
export function returnAt(ctx: EffectContext, target: SlotRef | undefined): void {
  const unit = target ? unitAt(ctx, target) : null

  if (unit) {
    returnToHand(ctx, unit)
  }
}

// ─── Attachments and artifacts ───────────────────────────────────────────────

/** The ally an attachment (`ctx.self`) is on, with its slot (null when it is no longer in play). */
export function host(ctx: EffectContext): { unit: Unit; ref: SlotRef } | null {
  const found = ctx.engine.hostOf(ctx.self.uid)

  return found ? { unit: found.unit, ref: { player: found.player, slot: found.slot } } : null
}

/** Whether a slot is the one of the ally this attachment (`ctx.self`) is on. */
export function isHost(ctx: EffectContext, target: SlotRef): boolean {
  const found = host(ctx)

  return !!found && found.ref.player === target.player && found.ref.slot === target.slot
}

/** Whether a slot holds an ally of `player` (not the hero). */
export function isAllyOf(ctx: EffectContext, target: SlotRef, player: PlayerId): boolean {
  return target.player === player && target.slot !== 'hero' && !!ctx.engine.targetUnit(target)
}

/** Uses left of this artifact (`ctx.self`; null: it has no limit). */
export function chargesLeft(ctx: EffectContext): number | null {
  return ctx.engine.player(ctx.owner).artifacts.find((card) => card.uid === ctx.self.uid)?.charges ?? null
}

/** Spends a use of this artifact (`ctx.self`): at 0 it is discarded. */
export function spendCharge(ctx: EffectContext): void {
  ctx.engine.spendCharge(ctx.owner, ctx.self.uid)
}

/** Sets an ally's health and max health (an attachment that trades life for power). */
export function setHealth(ctx: EffectContext, unit: Unit, health: number): void {
  unit.maxHealth = health
  unit.health = Math.min(unit.health, health)
}

// ─── Energy ──────────────────────────────────────────────────────────────────

/** Energy stored by a player's hero. */
export function energyOf(ctx: EffectContext, player: PlayerId): number {
  return ctx.engine.player(player).energy ?? 0
}

/** Adds energy to a player's hero (up to the maximum). */
export function gainEnergy(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.gainEnergy(player, amount)
}

/** Takes energy away from a player's hero (never below 0); returns how much it took. */
export function drainEnergy(ctx: EffectContext, player: PlayerId, amount: number): number {
  const before = energyOf(ctx, player)

  ctx.engine.gainEnergy(player, -amount)

  return before - energyOf(ctx, player)
}

// ─── Status effects ──────────────────────────────────────────────────────────

/** Poisons a hero or an ally: it loses `amount` health at the start of each phase, 1 less each time. */
export function poison(ctx: EffectContext, target: SlotRef, amount: number): void {
  ctx.engine.afflict(target, 'poison', amount)
}

/** Sets a hero or an ally on fire: it loses `amount` health at the start of each of the next `phases` phases. */
export function burn(ctx: EffectContext, target: SlotRef, amount: number, phases?: number): void {
  ctx.engine.afflict(target, 'burn', amount, phases)
}

/** Freezes a hero or an ally: it can't attack, move or use abilities for the rest of this phase and `phases` more. */
export function freeze(ctx: EffectContext, target: SlotRef, phases = 1): void {
  ctx.engine.afflict(target, 'freeze', phases)
}

/** Removes every status effect of a hero or an ally. */
export function cleanse(ctx: EffectContext, target: SlotRef): void {
  ctx.engine.cleanse(target)
}

/** Whether the hero or ally of a slot has any status effect. */
export function isAfflicted(ctx: EffectContext, target: SlotRef): boolean {
  const subject = target.slot === 'hero' ? ctx.engine.player(target.player).hero : ctx.engine.targetUnit(target)

  return !!subject && (!!subject.poison || !!subject.burn || ctx.engine.isFrozen(subject))
}

/** The slots of every ally of a side. */
export function allyRefs(ctx: EffectContext, player: PlayerId): SlotRef[] {
  const refs: SlotRef[] = []

  ctx.engine.player(player).allies.forEach((unit, slot) => {
    if (unit) {
      refs.push({ player, slot })
    }
  })

  return refs
}

// ─── Breaking the rival's gear ───────────────────────────────────────────────

/** Destroys a player's weapon. False when it has none. */
export function destroyWeapon(ctx: EffectContext, player: PlayerId): boolean {
  return ctx.engine.destroyWeapon(player)
}

/** Destroys the armor of a player's hero. False when it has none. */
export function destroyArmor(ctx: EffectContext, player: PlayerId): boolean {
  return ctx.engine.destroyArmor(player)
}

/**
 * Destroys the card a target points to (a target kind `enemyGear` or
 * `enemyAttachment`): a hero's weapon or armor, or a card attached to an ally.
 * False when it is no longer there.
 */
export function destroyAttachedAt(ctx: EffectContext, target: SlotRef | undefined): boolean {
  return !!target && ctx.engine.destroyAttached(target)
}

/** A player's weapon loses durability (it breaks at 0). */
export function wearWeapon(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.wearWeapon(player, amount)
}

/** A player's armor loses durability (it breaks at 0). */
export function wearArmor(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.wearArmor(player, amount)
}

/** A player's weapon gains durability. False when it has none. */
export function repairWeapon(ctx: EffectContext, player: PlayerId, amount: number): boolean {
  return ctx.engine.repairGear(player, 'weapon', amount)
}

/** A player's armor gains durability. False when it has none. */
export function repairArmor(ctx: EffectContext, player: PlayerId, amount: number): boolean {
  return ctx.engine.repairGear(player, 'armor', amount)
}

/** Destroys an artifact of a player (the most expensive by default). False when it has none. */
export function destroyArtifact(
  ctx: EffectContext,
  player: PlayerId,
  which: 'priciest' | 'cheapest' | 'random' = 'priciest'
): boolean {
  return ctx.engine.destroyArtifact(player, which)
}

/** Destroys every copy in play of an artifact (`cardId`), on both sides; how many. */
export function destroyArtifactsById(ctx: EffectContext, cardId: string): number {
  return ctx.engine.destroyArtifactsWhere((card) => card.cardId === cardId)
}

/** Whether an artifact (`cardId`) is in play, on either side. */
export function artifactInPlay(ctx: EffectContext, cardId: string): boolean {
  return PLAYER_IDS.some((player) => ctx.engine.player(player).artifacts.some((card) => card.cardId === cardId))
}

/** Destroys this artifact (`ctx.self`). */
export function destroySelfArtifact(ctx: EffectContext): void {
  ctx.engine.destroyArtifactsWhere((card, player) => player === ctx.owner && card.uid === ctx.self.uid)
}

/** Whether any ally is in play, on either side. */
export function anyAllyInPlay(ctx: EffectContext): boolean {
  return PLAYER_IDS.some((player) => ctx.engine.allies(player).length > 0)
}

/** Destroys a random face-down trap of a player. False when it has none. */
export function destroyTrap(ctx: EffectContext, player: PlayerId): boolean {
  return ctx.engine.destroyTrap(player)
}

/** The allies of a side that belong to a tribe (`others`: all but the one whose logic runs). */
export function tribeAllies(ctx: EffectContext, player: PlayerId, tribe: Tribe, others = false): Unit[] {
  return alliesOf(ctx, player).filter(
    (unit) => getCard(unit.cardId).tribe === tribe && (!others || unit.uid !== ctx.self.uid)
  )
}

/** Whether an ally belongs to a tribe. */
export function isTribe(unit: Unit, tribe: Tribe): boolean {
  return getCard(unit.cardId).tribe === tribe
}

/** Allies of a tribe gain attack and health (`others`: all but the one whose logic runs). */
export function buffTribe(
  ctx: EffectContext,
  player: PlayerId,
  tribe: Tribe,
  attack: number,
  health: number,
  others = false
): void {
  for (const unit of tribeAllies(ctx, player, tribe, others)) {
    buff(ctx, unit, attack, health)
  }
}

/**
 * Seeks a card: the first one from the top of the deck that matches goes to
 * the hand (the deck is not shuffled: the match stays reproducible). False
 * when none matches.
 */
export function seek(ctx: EffectContext, player: PlayerId, matches: (card: CardDefinition) => boolean): boolean {
  const side = ctx.engine.player(player)

  for (let index = side.deck.length - 1; index >= 0; index--) {
    const card = side.deck[index]

    if (matches(getCard(card.cardId))) {
      side.deck.splice(index, 1)
      ctx.engine.addToHand(player, card)
      ctx.engine.emit({ type: 'draw', player, cardUid: card.uid })

      return true
    }
  }

  return false
}

/** Seeks an ally of a tribe (see `seek`). */
export function seekTribe(ctx: EffectContext, player: PlayerId, tribe: Tribe): boolean {
  return seek(ctx, player, (card) => card.type === 'ally' && card.tribe === tribe)
}

/** Takes away Chronos capacity for good (never below 0). Returns how much it took. */
export function drainChronosCapacity(ctx: EffectContext, player: PlayerId, amount: number): number {
  const side = ctx.engine.player(player)
  const taken = Math.min(amount, side.chronosCapacity)

  side.chronosCapacity -= taken
  side.chronos = Math.min(side.chronos, side.chronosCapacity)

  return taken
}

/** Adds Chronos capacity for good. */
export function gainChronosCapacity(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.player(player).chronosCapacity += amount
}

/**
 * Banishes cards from the top of a discard pile (the last ones that went
 * there): they leave the match, so nothing can bring them back. Returns how
 * many it banished.
 */
export function banishFromDiscard(ctx: EffectContext, player: PlayerId, count: number): number {
  const side = ctx.engine.player(player)
  const banished = Math.min(count, side.discard.length)

  side.discard.splice(side.discard.length - banished, banished)

  return banished
}

/**
 * A random card of a hand goes to the discard pile. Cards already programmed
 * on the timeline are safe: use it at the end of a phase, never in the middle.
 */
export function discardRandom(ctx: EffectContext, player: PlayerId): boolean {
  const side = ctx.engine.player(player)

  if (side.hand.length === 0) {
    return false
  }

  const [card] = side.hand.splice(Math.floor(ctx.random() * side.hand.length), 1)

  side.discard.push(card)
  ctx.engine.emit({ type: 'burn', player, cardId: card.cardId })

  return true
}

/** The ally can attack again this phase (it is readied). */
export function ready(ctx: EffectContext, unit: Unit): void {
  unit.attacksThisPhase = 0
  unit.abilityUsedThisPhase = false
}

/** How many cards a side has in its hand. */
export function handSize(ctx: EffectContext, player: PlayerId): number {
  return ctx.engine.player(player).hand.length
}

/** Damage to the rival hero (it ignores guardians, like every direct damage). */
export function damageEnemyHero(ctx: EffectContext, amount: number, element?: Element | null): void {
  damage(ctx, { player: ctx.opponent, slot: 'hero' }, amount, element)
}

/** Heals the owner's hero. */
export function healHero(ctx: EffectContext, amount: number): void {
  heal(ctx, { player: ctx.owner, slot: 'hero' }, amount)
}

// ─── Heroes' abilities ───────────────────────────────────────────────────────

/** The ally on top of a side's discard pile (the last one to get there), or null. */
export function topDiscardAlly(ctx: EffectContext, player: PlayerId): CardInstance | null {
  const discard = ctx.engine.player(player).discard

  for (let i = discard.length - 1; i >= 0; i--) {
    if (getCard(discard[i].cardId).type === 'ally') {
      return discard[i]
    }
  }

  return null
}

/** The last ally of a player that died on the board and is still in the discard pile. */
export function lastDefeatedAlly(ctx: EffectContext, player: PlayerId): CardInstance | null {
  const discard = ctx.engine.player(player).discard

  for (let i = discard.length - 1; i >= 0; i--) {
    if (discard[i].defeated && getCard(discard[i].cardId).type === 'ally') {
      return discard[i]
    }
  }

  return null
}

/** Brings back to the board the last ally of the player that died on the board. */
export function reviveLastDefeated(ctx: EffectContext, player: PlayerId): Unit | null {
  const card = lastDefeatedAlly(ctx, player)

  if (!card || ctx.engine.freeSlots(player).length === 0) {
    return null
  }

  const side = ctx.engine.player(player)

  side.discard = side.discard.filter((candidate) => candidate.uid !== card.uid)

  return ctx.engine.summon(player, card)
}

/** Brings back to the board the ally on top of the discard pile. */
export function reviveTopAlly(ctx: EffectContext, player: PlayerId): Unit | null {
  const card = topDiscardAlly(ctx, player)

  if (!card || ctx.engine.freeSlots(player).length === 0) {
    return null
  }

  const side = ctx.engine.player(player)

  side.discard = side.discard.filter((candidate) => candidate.uid !== card.uid)

  return ctx.engine.summon(player, card)
}

/** The most expensive ally of the hand that costs `maxCost` Chronos or less (the first one on a tie), or null. */
export function priciestAllyInHand(ctx: EffectContext, player: PlayerId, maxCost: number): CardInstance | null {
  let best: CardInstance | null = null

  for (const card of ctx.engine.player(player).hand) {
    const definition = getCard(card.cardId)

    if (
      definition.type === 'ally' &&
      definition.cost <= maxCost &&
      (!best || definition.cost > getCard(best.cardId).cost)
    ) {
      best = card
    }
  }

  return best
}

/** Summons, without paying it, the most expensive ally of the hand that costs `maxCost` or less. */
export function summonPriciestFromHand(ctx: EffectContext, player: PlayerId, maxCost: number): Unit | null {
  const card = priciestAllyInHand(ctx, player, maxCost)

  if (!card || ctx.engine.freeSlots(player).length === 0) {
    return null
  }

  const side = ctx.engine.player(player)

  side.hand = side.hand.filter((candidate) => candidate.uid !== card.uid)
  ctx.engine.emit({ type: 'play', player, cardId: card.cardId })

  return ctx.engine.summon(player, card)
}

/** The hero's weapon gains +`attack` and +`durability`. False when it has none. */
export function boostWeapon(ctx: EffectContext, player: PlayerId, attack: number, durability: number): boolean {
  const weapon = ctx.engine.player(player).hero.weapon

  if (!weapon) {
    return false
  }

  weapon.attack += attack
  ctx.engine.emit({ type: 'buff', target: { player, slot: 'hero' }, attack, health: 0 })
  ctx.engine.repairGear(player, 'weapon', durability)

  return true
}

/** Whether the deck has an artifact with that id. */
export function deckHasArtifact(ctx: EffectContext, player: PlayerId, cardId: string | undefined): boolean {
  return (
    cardId != null &&
    ctx.engine.player(player).deck.some((card) => card.cardId === cardId) &&
    getCard(cardId).type === 'artifact'
  )
}

/** Puts in play, without paying it, an artifact of the deck (`cardId`), and shuffles the deck. */
export function playArtifactFromDeck(ctx: EffectContext, player: PlayerId, cardId: string): boolean {
  return ctx.engine.playArtifactFromDeck(player, cardId)
}

/**
 * The allies of a side gain `stealth` and +`attack` for the rest of this phase and `phases` more (attacking
 * doesn't break it); with `hero`, its hero is hidden too.
 */
export function veilAllies(ctx: EffectContext, player: PlayerId, attack: number, phases = 1, hero = false): void {
  ctx.engine.veilAllies(player, attack, phases, hero)
}

/** A lasting effect on a whole side until the end of the next phase (`guard`, `empower`, `allyDiscount`). */
export function addBoon(ctx: EffectContext, player: PlayerId, kind: BoonKind, amount: number): void {
  ctx.engine.addBoon(player, kind, amount)
}

/** Poisons every ally of a side. */
export function poisonAllAllies(ctx: EffectContext, player: PlayerId, amount: number): void {
  for (const ref of allyRefs(ctx, player)) {
    poison(ctx, ref, amount)
  }
}

/** The slots next to an ally slot of a side (none next to the hero). */
export function slotsNextTo(ctx: EffectContext, target: SlotRef): SlotRef[] {
  if (target.slot === 'hero') {
    return []
  }

  const slot = target.slot

  return [slot - 1, slot + 1]
    .filter((candidate) => candidate >= 0 && candidate < ALLY_SLOTS)
    .map((candidate) => ({ player: target.player, slot: candidate }))
}

/** A player discards `count` random cards of the hand when the current phase ends. */
export function discardAtPhaseEnd(ctx: EffectContext, player: PlayerId, count: number): void {
  ctx.engine.scheduleDiscard(player, count)
}

/** Every ally of a side loses `amount` attack for good (never below 0). */
export function weakenAllAllies(ctx: EffectContext, player: PlayerId, amount: number): void {
  for (const unit of ctx.engine.allies(player)) {
    const loss = Math.min(amount, Math.max(0, unit.attack))

    if (loss > 0) {
      ctx.engine.buff(unit.uid, -loss, 0)
    }
  }
}

/**
 * Takes control of an enemy ally for a moment: it hits `target` (another slot of its own side) with its attack and its
 * element, as if the caster's side had attacked, and then it's stunned for the rest of this phase and the next one.
 */
export function mindControl(ctx: EffectContext, controlled: SlotRef, target: SlotRef): boolean {
  const unit = ctx.engine.targetUnit(controlled)

  if (!unit) {
    return false
  }

  ctx.engine.emit({ type: 'attack', attacker: controlled, target })
  ctx.engine.damage(target, ctx.engine.attackOf(unit), {
    player: ctx.owner,
    element: getCard(unit.cardId).element
  })
  ctx.engine.stun(unit.uid, 1)

  return true
}

// ─── The factions' mechanics (docs/FACTIONS.md) ──────────────────────────────

/** Spell power of a side: what its spells add to their damage. */
export function spellPowerOf(ctx: EffectContext, player: PlayerId): number {
  return ctx.engine.spellPower(player)
}

/** Whether a card is a spell (an ability of subtype `spell`). */
export function isSpell(card: CardDefinition): boolean {
  return card.type === 'ability' && card.subtype === 'spell'
}

/** Marks the ally in a slot as Prey of the owner (until the end of the next phase). False when there is none. */
export function markPrey(ctx: EffectContext, target: SlotRef | undefined): boolean {
  const unit = target ? unitAt(ctx, target) : null

  return !!unit && ctx.engine.markPrey(unit.uid, ctx.owner)
}

/** Marks an ally as Prey of the owner. */
export function markPreyAlly(ctx: EffectContext, unit: Unit): boolean {
  return ctx.engine.markPrey(unit.uid, ctx.owner)
}

/** Whether an ally is the owner's Prey now. */
export function isPrey(ctx: EffectContext, unit: Unit): boolean {
  return ctx.engine.isPreyOf(unit, ctx.owner)
}

/** Panoply: the hero of `player` has a weapon and an armor equipped. */
export function hasPanoply(ctx: EffectContext, player: PlayerId = ctx.owner): boolean {
  const hero = ctx.engine.player(player).hero

  return !!hero.weapon && !!hero.armor
}

/** How many artifacts a side has in play. */
export function artifactCount(ctx: EffectContext, player: PlayerId = ctx.owner): number {
  return ctx.engine.player(player).artifacts.length
}

/**
 * Recharge: artifacts of the owner that have uses gain `amount` more: one
 * (its uid) or all of them. Returns how many gained.
 */
export function recharge(ctx: EffectContext, which: number | 'all', amount: number): number {
  return ctx.engine.recharge(ctx.owner, which, amount)
}

/** A random artifact of the owner that has uses gains `amount` more. False when it has none. */
export function rechargeRandom(ctx: EffectContext, amount: number): boolean {
  const artifacts = ctx.engine.player(ctx.owner).artifacts.filter((card) => card.charges != null)

  if (artifacts.length === 0) {
    return false
  }

  return recharge(ctx, artifacts[Math.floor(ctx.random() * artifacts.length)].uid, amount) > 0
}

/** The subtypes of the cards attached to an ally. */
function attachedSubtypes(unit: Unit): string[] {
  return (unit.attachments ?? []).flatMap((card) => {
    const subtype = getCard(card.cardId).subtype

    return subtype ? [subtype] : []
  })
}

/** Enhanced: the ally has at least one implant attached. */
export function isEnhanced(unit: Unit): boolean {
  return attachedSubtypes(unit).includes('implant')
}

/** Cursed: the ally has a curse attached. */
export function isCursed(unit: Unit): boolean {
  return attachedSubtypes(unit).includes('curse')
}

/** The enhanced allies of a side. */
export function enhancedAllies(ctx: EffectContext, player: PlayerId): Unit[] {
  return alliesOf(ctx, player).filter(isEnhanced)
}

/**
 * The support card a target (`enemyArtifact`, `friendlyArtifact`) points to:
 * an artifact or a face-down trap, with its card. Null when it is gone.
 */
export function supportAt(
  ctx: EffectContext,
  target: SlotRef | undefined
): { kind: 'artifact' | 'trap'; card: CardInstance; definition: CardDefinition } | null {
  const found = target ? ctx.engine.supportCard(target.player, target.attached) : null

  return found ? { ...found, definition: getCard(found.card.cardId) } : null
}

/** Destroys the support card a target points to. False when it is gone. */
export function destroySupportAt(ctx: EffectContext, target: SlotRef | undefined): boolean {
  return !!target && target.attached != null && ctx.engine.destroySupport(target.player, target.attached)
}

/**
 * Hack: switches off the support card a target points to (an artifact or a
 * face-down trap) for the rest of this phase and `phases` more. False when it is gone.
 */
export function disableSupportAt(ctx: EffectContext, target: SlotRef | undefined, phases: number): boolean {
  return !!target && target.attached != null && ctx.engine.disableSupport(target.player, target.attached, phases)
}

/** Consume X: banishes X cards of the owner's discard pile (allies last). False, and nothing banished, with fewer. */
export function consume(ctx: EffectContext, count: number): boolean {
  return ctx.engine.consume(ctx.owner, count)
}

/** Seeks the first card of a type of the deck (see `seek`). */
export function seekType(ctx: EffectContext, player: PlayerId, type: CardDefinition['type']): boolean {
  return seek(ctx, player, (card) => card.type === type)
}

/** Seeks the first card of a subtype of the deck (see `seek`). */
export function seekSubtype(ctx: EffectContext, player: PlayerId, subtype: string): boolean {
  return seek(ctx, player, (card) => card.subtype === subtype)
}

/** Takes a card of a subtype from the discard pile back to the hand (the last one to get there). False: none. */
export function recoverSubtype(ctx: EffectContext, player: PlayerId, subtype: string): boolean {
  const side = ctx.engine.player(player)

  for (let index = side.discard.length - 1; index >= 0; index--) {
    if (getCard(side.discard[index].cardId).subtype === subtype) {
      const [card] = side.discard.splice(index, 1)

      ctx.engine.addToHand(player, card)
      ctx.engine.emit({ type: 'returnToHand', player, cardId: card.cardId })

      return true
    }
  }

  return false
}

/** The hero's armor and weapon gain durability (each one it has). */
export function repairGear(ctx: EffectContext, player: PlayerId, amount: number): void {
  repairWeapon(ctx, player, amount)
  repairArmor(ctx, player, amount)
}

/** The ally whose logic runs gains a keyword for good (none if it already has it). */
export function grantKeyword(ctx: EffectContext, unit: Unit, keyword: Keyword): void {
  if (!unit.keywords.includes(keyword)) {
    unit.keywords.push(keyword)
  }

  if (keyword === 'shield') {
    unit.shield = true
  }
}

// ─── Disarm, lost keywords, killers, the discard pile back to play, robbing the rival ─────

/** An ally can't attack until the end of the phase `phases` phases from now (0: this one). It can still use its ability. */
export function disarmAt(ctx: EffectContext, target: SlotRef | undefined, phases = 1): boolean {
  const unit = target ? unitAt(ctx, target) : null

  if (!unit) {
    return false
  }

  disarmAlly(ctx, unit, phases)

  return true
}

/** See `disarmAt`. */
export function disarmAlly(ctx: EffectContext, unit: Unit, phases = 1): void {
  const found = ctx.engine.findUnit(unit.uid)

  unit.disarmedUntilPhase = Math.max(unit.disarmedUntilPhase ?? 0, ctx.engine.state.phase + phases)

  if (found) {
    ctx.engine.emit({ type: 'stun', target: { player: found.player, slot: found.slot } })
  }
}

/** Every ally on the board, of both sides, can't attack until the end of the phase `phases` phases from now. */
export function disarmEveryAlly(ctx: EffectContext, phases = 1): void {
  for (const player of PLAYER_IDS) {
    for (const unit of alliesOf(ctx, player)) {
      disarmAlly(ctx, unit, phases)
    }
  }
}

/** An ally loses some keywords until the end of the phase `phases` phases from now (0: this one). */
export function suppressKeywordsAt(
  ctx: EffectContext,
  target: SlotRef | undefined,
  keywords: Keyword[],
  phases = 0
): boolean {
  const unit = target ? unitAt(ctx, target) : null

  if (!unit) {
    return false
  }

  unit.suppressed = { keywords, untilPhase: ctx.engine.state.phase + phases }

  return true
}

/** Who killed an ally that just died (null: nothing is known, e.g. a status effect). */
export function killerOf(unit: Unit): Unit['killedBy'] | null {
  return unit.killedBy ?? null
}

/** The ally that dealt a damage, when the source says so (null: the hero, an effect, or it is gone). */
export function attackerOf(
  ctx: EffectContext,
  source: { attackerUid?: number | null } | undefined
): { player: PlayerId; slot: number; unit: Unit } | null {
  return source?.attackerUid != null ? ctx.engine.findUnit(source.attackerUid) : null
}

/** The ally dies at the end of the current phase. */
export function doom(ctx: EffectContext, unit: Unit): void {
  unit.doomed = true
}

/** The allies of a discard pile (tokens never come back), from the last one that got there. */
function discardAllies(
  ctx: EffectContext,
  player: PlayerId,
  matches: (card: CardDefinition) => boolean
): CardInstance[] {
  return ctx.engine
    .player(player)
    .discard.filter((card) => {
      const definition = getCard(card.cardId)

      return definition.type === 'ally' && !definition.token && matches(definition)
    })
    .reverse()
}

/**
 * Allies of the discard pile go back to the deck: on top of it (the next draws), or shuffled into it. `count`
 * of them, from the last one that got to the pile ('all': every one). Returns how many went.
 */
export function alliesToDeck(
  ctx: EffectContext,
  player: PlayerId,
  count: number | 'all',
  where: 'top' | 'shuffle',
  matches: (card: CardDefinition) => boolean = () => true
): number {
  const side = ctx.engine.player(player)
  const chosen = discardAllies(ctx, player, matches).slice(0, count === 'all' ? undefined : count)

  if (chosen.length === 0) {
    return 0
  }

  const uids = new Set(chosen.map((card) => card.uid))

  side.discard = side.discard.filter((card) => !uids.has(card.uid))

  // The top of the deck is the end of the array: the last ally of the pile ends up on top.
  for (const card of [...chosen].reverse()) {
    side.deck.push({ uid: card.uid, cardId: card.cardId })
  }

  if (where === 'shuffle') {
    ctx.engine.shuffle(side.deck)
  }

  return chosen.length
}

/** The last `count` allies of the discard pile go back to the hand. Returns how many came back. */
export function alliesToHand(ctx: EffectContext, player: PlayerId, count: number): number {
  const side = ctx.engine.player(player)
  const chosen = discardAllies(ctx, player, () => true).slice(0, count)

  for (const card of chosen) {
    side.discard = side.discard.filter((candidate) => candidate.uid !== card.uid)
    ctx.engine.addToHand(player, { uid: card.uid, cardId: card.cardId })
    ctx.engine.emit({ type: 'returnToHand', player, cardId: card.cardId })
  }

  return chosen.length
}

/** The last weapon or armor of the discard pile goes back to the hand. False: none. */
export function recoverGear(ctx: EffectContext, player: PlayerId): boolean {
  const side = ctx.engine.player(player)

  for (let index = side.discard.length - 1; index >= 0; index--) {
    const type = getCard(side.discard[index].cardId).type

    if (type === 'weapon' || type === 'armor') {
      const [card] = side.discard.splice(index, 1)

      ctx.engine.addToHand(player, card)
      ctx.engine.emit({ type: 'returnToHand', player, cardId: card.cardId })

      return true
    }
  }

  return false
}

/** The top card of the rival's deck goes to the owner's hand. False: the rival's deck is empty. */
export function drawFromRivalDeck(ctx: EffectContext): boolean {
  const card = ctx.engine.player(ctx.opponent).deck.pop()

  if (!card) {
    return false
  }

  ctx.engine.addToHand(ctx.owner, card)
  ctx.engine.emit({ type: 'draw', player: ctx.owner, cardUid: card.uid })

  return true
}

/**
 * A random card of the rival's hand goes to the owner's hand. Like `discardRandom`, it leaves the cards
 * already programmed alone only if it runs at the end of a phase: use it from an `afterDamage`, never mid-step.
 */
export function stealRandomFromHand(ctx: EffectContext): boolean {
  const rival = ctx.engine.player(ctx.opponent)

  if (rival.hand.length === 0) {
    return false
  }

  const [card] = rival.hand.splice(Math.floor(ctx.random() * rival.hand.length), 1)

  ctx.engine.addToHand(ctx.owner, card)
  ctx.engine.emit({ type: 'draw', player: ctx.owner, cardUid: card.uid })

  return true
}

/** Freezes an ally wherever it is now, even one that just entered (which a slot target can't see yet). */
export function freezeAlly(ctx: EffectContext, unit: Unit, phases = 1): void {
  const found = ctx.engine.findUnit(unit.uid)

  if (!found || unit.health <= 0) {
    return
  }

  unit.frozenUntilPhase = Math.max(unit.frozenUntilPhase ?? 0, ctx.engine.state.phase + phases)
  ctx.engine.emit({
    type: 'status',
    target: { player: found.player, slot: found.slot },
    status: 'freeze',
    amount: phases
  })
}
