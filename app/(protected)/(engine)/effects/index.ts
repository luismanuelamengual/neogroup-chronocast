import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { EffectContext } from '@/app/(protected)/(engine)/models/EffectContext'
import { Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/**
 * The building blocks of the card logic. A common card is usually one or two
 * of these calls; a mythic one can combine them with logic of its own. Damage
 * lands when the current speed bracket ends (simultaneous with the rival's).
 */

/** Damage to a slot (an empty one does nothing). */
export function damage(ctx: EffectContext, target: SlotRef, amount: number): void {
  ctx.engine.damage(target, amount, { player: ctx.owner })
}

/** Damage to every ally of a side. */
export function damageAllAllies(ctx: EffectContext, player: PlayerId, amount: number): void {
  for (const unit of ctx.engine.allies(player)) {
    ctx.engine.damageUnit(unit.uid, amount, { player: ctx.owner })
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

export function gainArmor(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.player(player).hero.armor += amount
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

/** Returns an ally to its owner's hand. */
export function returnToHand(ctx: EffectContext, unit: Unit): void {
  const found = ctx.engine.findUnit(unit.uid)

  if (!found) {
    return
  }

  ctx.engine.player(found.player).allies[found.slot] = null
  ctx.engine.dropAttachments(found.player, found.unit, false)
  ctx.engine.addToHand(found.player, { uid: unit.uid, cardId: unit.cardId })
  ctx.engine.emit({ type: 'returnToHand', player: found.player, cardId: unit.cardId })
}

/** The card of an ally on the board (its faction, type, keywords...). */
export function cardOf(unit: Unit): CardDefinition {
  return getCard(unit.cardId)
}

/** Damage to an ally, wherever it is now. */
export function damageAlly(ctx: EffectContext, unit: Unit, amount: number): void {
  ctx.engine.damageUnit(unit.uid, amount)
}

/** Damage to a random ally of a side (none when it has no allies). */
export function damageRandomAlly(ctx: EffectContext, player: PlayerId, amount: number): Unit | null {
  const unit = randomAlly(ctx, player)

  if (unit) {
    damageAlly(ctx, unit, amount)
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

/** Takes away all the armor of a player's hero. False when it has none. */
export function destroyArmor(ctx: EffectContext, player: PlayerId): boolean {
  return ctx.engine.destroyArmor(player)
}

/** A player's weapon loses durability (it breaks at 0). */
export function wearWeapon(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.wearWeapon(player, amount)
}

/** A player's hero loses armor points (its armor card breaks at 0). */
export function wearArmor(ctx: EffectContext, player: PlayerId, amount: number): void {
  ctx.engine.wearArmor(player, amount)
}

/** Destroys an artifact of a player (the most expensive by default). False when it has none. */
export function destroyArtifact(
  ctx: EffectContext,
  player: PlayerId,
  which: 'priciest' | 'cheapest' | 'random' = 'priciest'
): boolean {
  return ctx.engine.destroyArtifact(player, which)
}

/** Destroys a random face-down trap of a player. False when it has none. */
export function destroyTrap(ctx: EffectContext, player: PlayerId): boolean {
  return ctx.engine.destroyTrap(player)
}
