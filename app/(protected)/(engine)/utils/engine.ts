import {
  ALLY_SLOTS,
  BURN_PHASES,
  FATIGUE_START,
  FATIGUE_STEP,
  MAX_ENERGY,
  MAX_HAND,
  PREY_PHASES,
  SUPPORT_SLOTS
} from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition, TrapEvent, TrapTrigger } from '@/app/(protected)/(engine)/models/CardDefinition'
import { EffectContext } from '@/app/(protected)/(engine)/models/EffectContext'
import {
  EARTH_STUN_MAX_ATTACK,
  Element,
  FIRE_BURN,
  FIRE_BURN_PHASES,
  TIME_DRAIN_MIN_DAMAGE
} from '@/app/(protected)/(engine)/models/Element'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { MatchEvent, StatusKind } from '@/app/(protected)/(engine)/models/MatchEvent'
import {
  Afflictions,
  BoonKind,
  CardInstance,
  MatchState,
  PlayerState,
  Unit
} from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { boonOf, veilAttack } from '@/app/(protected)/(engine)/utils/boons'
import { nextRandom } from '@/app/(protected)/(engine)/utils/random'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** Where a damage comes from: its side, and the attacker's special rules. */
export interface DamageSource {
  player: PlayerId
  poison?: boolean
  lifesteal?: boolean
  /** Damage of poison or a burn: it goes past shields and armor. */
  status?: StatusKind
  /** Its element (none: physical). */
  element?: Element
  /** The jump of a lightning damage (it doesn't jump again). */
  chained?: boolean
}

/** A card attached to a hero (its weapon or armor) or to an ally (with the ally), that a target points to. */
export type AttachedTarget =
  | { kind: 'weapon'; card: CardInstance }
  | { kind: 'armor'; card: CardInstance }
  | { kind: 'attachment'; card: CardInstance; host: Unit }

type PendingDamage =
  | { kind: 'unit'; uid: number; amount: number; source?: DamageSource }
  | { kind: 'hero'; player: PlayerId; amount: number; source?: DamageSource }

/** Hooks that run on every card in play of a side (the hero, its attachments, its location and its allies). */
type SharedHook = 'onPhaseStart' | 'onPhaseEnd'

/** The most rounds of "damage → deaths → more damage" in a row (a safety net against endless loops). */
const MAX_FLUSH_ROUNDS = 50

/**
 * The mutable engine of one resolution: it works on a state it owns (a copy
 * made by resolvePhase / createMatch), records the events and keeps the damage
 * of the current speed bracket pending, so the actions of the same speed are
 * simultaneous. Card logic reaches it through the helpers of (engine)/effects.
 */
export class MatchEngine {
  readonly events: MatchEvent[] = []
  private pending: PendingDamage[] = []
  /** What runs once the pending damage landed (`afterDamage`). */
  private deferred: (() => void)[] = []
  /** The uid in each ally slot when the current speed bracket started (null outside a bracket). */
  private snapshot: Record<PlayerId, (number | null)[]> | null = null

  constructor(readonly state: MatchState) {}

  // ─── Basics ────────────────────────────────────────────────────────────────

  random(): number {
    const { value, state } = nextRandom(this.state.rng)

    this.state.rng = state

    return value
  }

  player(id: PlayerId): PlayerState {
    return this.state.players[id]
  }

  emit(event: MatchEvent): void {
    this.events.push(event)
  }

  newUid(): number {
    return this.state.nextUid++
  }

  newCard(cardId: string): CardInstance {
    return { uid: this.newUid(), cardId }
  }

  shuffle<T>(items: T[]): void {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1))

      ;[items[i], items[j]] = [items[j], items[i]]
    }
  }

  // ─── Units ─────────────────────────────────────────────────────────────────

  unitAt(player: PlayerId, slot: number): Unit | null {
    return this.player(player).allies[slot] ?? null
  }

  allies(player: PlayerId): Unit[] {
    return this.player(player).allies.filter((unit): unit is Unit => !!unit)
  }

  findUnit(uid: number): { player: PlayerId; slot: number; unit: Unit } | null {
    for (const player of PLAYER_IDS) {
      const slot = this.player(player).allies.findIndex((unit) => unit?.uid === uid)

      if (slot >= 0) {
        return { player, slot, unit: this.player(player).allies[slot]! }
      }
    }

    return null
  }

  freeSlots(player: PlayerId): number[] {
    return this.player(player)
      .allies.map((unit, slot) => (unit ? -1 : slot))
      .filter((slot) => slot >= 0)
  }

  /** Its own keywords, and the ones the cards in play of its side lend it (`auraKeywords`). */
  hasKeyword(unit: Unit, keyword: Keyword): boolean {
    return unit.keywords.includes(keyword) || this.auraKeywords(unit).includes(keyword)
  }

  /** The keywords the cards in play of an ally's side lend it (`auraKeywords`). */
  auraKeywords(unit: Unit): Keyword[] {
    const found = this.findUnit(unit.uid)

    if (!found) {
      return []
    }

    const keywords: Keyword[] = []

    for (const card of this.inPlay(found.player)) {
      const aura = getCard(card.cardId).auraKeywords

      if (aura) {
        keywords.push(...aura(this.context(found.player, card), found.unit))
      }
    }

    return keywords
  }

  /** The spell power of a side (docs/FACTIONS.md): the `spellPower` of every card it has in play. */
  spellPower(player: PlayerId): number {
    return this.inPlay(player).reduce((total, card) => total + (getCard(card.cardId).spellPower ?? 0), 0)
  }

  /** Whether an ally is the Prey of `player` now. */
  isPreyOf(unit: Unit, player: PlayerId): boolean {
    return !!unit.prey && unit.prey.by === player && unit.prey.untilPhase >= this.state.phase
  }

  /** Marks an ally as the Prey of `by` until the end of the next phase. */
  markPrey(uid: number, by: PlayerId): boolean {
    const found = this.findUnit(uid)

    if (!found || found.unit.health <= 0) {
      return false
    }

    found.unit.prey = { by, untilPhase: this.state.phase + PREY_PHASES }
    this.emit({ type: 'status', target: { player: found.player, slot: found.slot }, status: 'prey', amount: 1 })

    return true
  }

  /** An artifact or a face-down trap switched off by an enemy hack. */
  isDisabled(card: CardInstance): boolean {
    return (card.disabledUntilPhase ?? 0) >= this.state.phase
  }

  attackOf(unit: Unit): number {
    return Math.max(0, unit.attack + unit.tempAttack + veilAttack(this.state, unit))
  }

  /** Hidden by a hero's ability (a veil that gave it stealth) that still lasts: attacking doesn't reveal it. */
  isVeiled(unit: Unit): boolean {
    return !!unit.veil?.stealth && unit.veil.untilPhase >= this.state.phase
  }

  /** Stunned or frozen: it can't act. */
  isStunned(unit: Unit): boolean {
    return unit.stunnedUntilPhase >= this.state.phase || this.isFrozen(unit)
  }

  isFrozen(subject: Afflictions): boolean {
    return (subject.frozenUntilPhase ?? 0) >= this.state.phase
  }

  /** An attachment on the ally keeps it from attacking (`disarms`) or from using its ability (`silences`). */
  isRestrained(unit: Unit, rule: 'disarms' | 'silences'): boolean {
    return (unit.attachments ?? []).some((card) => getCard(card.cardId)[rule])
  }

  /** Freezes who is in each slot: within a speed bracket, attacks and effects aim at the board as it was when it started. */
  takeSnapshot(): void {
    this.snapshot = {
      a: this.player('a').allies.map((unit) => unit?.uid ?? null),
      b: this.player('b').allies.map((unit) => unit?.uid ?? null)
    }
  }

  clearSnapshot(): void {
    this.snapshot = null
  }

  /** The ally a slot points to: the one there when the bracket started (if it is still alive), or the current one. */
  targetUnit(ref: SlotRef): Unit | null {
    if (ref.slot === 'hero' || ref.slot < 0 || ref.slot >= ALLY_SLOTS) {
      return null
    }

    if (this.snapshot) {
      const uid = this.snapshot[ref.player][ref.slot]

      return uid == null ? null : (this.findUnit(uid)?.unit ?? null)
    }

    return this.unitAt(ref.player, ref.slot)
  }

  /** The guardian that takes the attacks aimed at the hero of `player` (the one in the lowest slot). */
  guardianOf(player: PlayerId): number | null {
    for (let slot = 0; slot < ALLY_SLOTS; slot++) {
      const unit = this.targetUnit({ player, slot })

      if (unit && this.hasKeyword(unit, 'guardian') && !this.hasKeyword(unit, 'stealth')) {
        return slot
      }
    }

    return null
  }

  // ─── Damage, healing and deaths ────────────────────────────────────────────

  /** Deals damage to a slot (an empty one does nothing). It lands when the speed bracket ends. */
  damage(target: SlotRef, amount: number, source?: DamageSource): boolean {
    if (amount <= 0) {
      return false
    }

    if (target.slot === 'hero') {
      this.pending.push({ kind: 'hero', player: target.player, amount, source })

      return true
    }

    const unit = this.targetUnit(target)

    if (!unit) {
      return false
    }

    this.pending.push({ kind: 'unit', uid: unit.uid, amount, source })

    return true
  }

  damageUnit(uid: number, amount: number, source?: DamageSource): void {
    if (amount > 0) {
      this.pending.push({ kind: 'unit', uid, amount, source })
    }
  }

  damageHero(player: PlayerId, amount: number, source?: DamageSource): void {
    if (amount > 0) {
      this.pending.push({ kind: 'hero', player, amount, source })
    }
  }

  /** Applies the pending damage, runs the "when damaged" logic and removes the dead, until nothing is left. */
  flush(): void {
    for (let round = 0; round < MAX_FLUSH_ROUNDS && this.pending.length > 0; round++) {
      const batch = this.pending

      this.pending = []

      const damaged: { uid: number; amount: number }[] = []

      for (const hit of batch) {
        if (hit.kind === 'hero') {
          const ref: SlotRef = { player: hit.player, slot: 'hero' }
          const amount = this.elementalDamage(ref, null, hit.amount, hit.source)

          if (amount <= 0) {
            continue
          }

          const dealt = this.applyHeroDamage(hit.player, amount, hit.source)

          this.applyLifesteal(hit.source, dealt)
          this.afterElementalHit(ref, null, dealt, hit.source)
        } else {
          const found = this.findUnit(hit.uid)

          if (!found || found.unit.health <= 0) {
            continue
          }

          const { unit, player, slot } = found
          const ref = { player, slot }
          const element = hit.source?.element

          if (element === 'earth' && this.hasKeyword(unit, 'flying')) {
            this.emit({ type: 'damage', target: ref, amount: 0, absorbed: hit.amount, element })
            continue
          }

          if (unit.shield && !hit.source?.status && element !== 'shadow') {
            unit.shield = false
            this.emit({ type: 'shieldBlock', target: ref })
            continue
          }

          const modified = this.elementalDamage(ref, unit, hit.amount, hit.source)
          const amount = hit.source?.poison ? Math.max(hit.amount, unit.health) : modified

          if (amount <= 0) {
            this.emit({ type: 'damage', target: ref, amount: 0, absorbed: hit.amount, element })
            continue
          }

          unit.health -= amount
          this.emit({ type: 'damage', target: ref, amount, absorbed: 0, status: hit.source?.status, element })
          this.applyLifesteal(hit.source, hit.amount)
          this.afterElementalHit(ref, unit, amount, hit.source)
          damaged.push({ uid: unit.uid, amount })
        }
      }

      for (const { uid, amount } of damaged) {
        const found = this.findUnit(uid)

        if (found) {
          getCard(found.unit.cardId).onDamaged?.(this.context(found.player, found.unit), amount)
        }
      }

      this.processDeaths()
    }

    const deferred = this.deferred

    this.deferred = []

    for (const run of deferred) {
      run()
    }
  }

  /** Runs `effect` once the pending damage of the current bracket landed (a freeze that must not double it). */
  afterDamage(effect: () => void): void {
    this.deferred.push(effect)
  }

  /**
   * A damage about to land on `target` (`unit` when it is an ally): the
   * element's own multiplier, then resistances and vulnerabilities, then every
   * `modifyDamage` in play (arcane damage skips the reductions). Never below 0.
   */
  private elementalDamage(target: SlotRef, unit: Unit | null, amount: number, source?: DamageSource): number {
    const element = source?.element

    if (source?.status) {
      return this.modifiedDamage(target, amount)
    }

    if (!element) {
      return this.boosted(target, this.modifiedDamage(target, amount), source)
    }

    let result = amount
    const definition = getCard(unit ? unit.cardId : this.player(target.player).hero.cardId)
    const subject: Afflictions = unit ?? this.player(target.player).hero

    if (element === 'ice' && this.isFrozen(subject)) {
      result *= 2
    } else if (element === 'light' && (definition.tribe === 'undead' || definition.tribe === 'horror')) {
      result *= 2
    } else if (element === 'wind' && unit && this.hasKeyword(unit, 'flying')) {
      result *= 2
    }

    if (definition.weak?.includes(element)) {
      result *= 2
    }

    if (element === 'arcane') {
      return this.boosted(target, Math.max(0, Math.round(result)), source, true)
    }

    if (definition.resist?.includes(element)) {
      result = Math.ceil(result / 2)
    }

    return this.boosted(target, this.modifiedDamage(target, result), source)
  }

  /**
   * The boons of the heroes' abilities on a damage about to land: `empower` of the side dealing it
   * (against the rival), then `guard` of the side whose ally takes it (not against arcane damage).
   */
  private boosted(target: SlotRef, amount: number, source?: DamageSource, arcane = false): number {
    if (amount <= 0) {
      return amount
    }

    let result = amount

    if (source && source.player !== target.player) {
      result += boonOf(this.state, source.player, 'empower')
    }

    if (target.slot !== 'hero' && !arcane) {
      result -= boonOf(this.state, target.player, 'guard')
    }

    return Math.max(0, result)
  }

  /** The rule an element adds once its damage landed (`dealt` > 0) on `target`. */
  private afterElementalHit(target: SlotRef, unit: Unit | null, dealt: number, source?: DamageSource): void {
    const element = source?.element

    if (!element || source?.status || dealt <= 0) {
      return
    }

    switch (element) {
      case 'fire':
        this.afflict(target, 'burn', FIRE_BURN, FIRE_BURN_PHASES)
        break
      case 'acid':
        this.afflict(target, 'poison', 1)
        break
      case 'lightning':
        if (unit && !source.chained && typeof target.slot === 'number') {
          const neighbors = [target.slot - 1, target.slot + 1]
            .map((slot) => this.player(target.player).allies[slot])
            .filter((other): other is Unit => !!other && other.health > 0)

          if (neighbors.length > 0) {
            const next = neighbors[Math.floor(this.random() * neighbors.length)]

            this.damageUnit(next.uid, Math.max(1, Math.floor(dealt / 2)), {
              ...source,
              chained: true,
              lifesteal: false
            })
          }
        }

        break
      case 'light':
        this.heal({ player: source.player, slot: 'hero' }, Math.ceil(dealt / 2))
        break

      case 'time': {
        const subject = unit ?? this.player(target.player).hero

        subject.maxHealth = Math.max(1, subject.maxHealth - dealt)

        if (!unit && dealt >= TIME_DRAIN_MIN_DAMAGE) {
          const side = this.player(target.player)

          if (side.chronos > 0) {
            side.chronos--
            this.emit({ type: 'chronos', player: target.player, amount: -1 })
          }
        }

        break
      }

      case 'earth':
        if (unit && unit.health > 0 && this.attackOf(unit) <= EARTH_STUN_MAX_ATTACK) {
          this.stun(unit.uid, 1)
        }

        break
      case 'sonic':
        if (unit) {
          unit.keywords = unit.keywords.filter((keyword) => keyword !== 'stealth')
        }

        break
      case 'water':
        if (unit && unit.attack > 0) {
          unit.attack--
          this.emit({ type: 'buff', target, attack: -1, health: 0 })
        }

        break
      default:
        break
    }
  }

  /** A damage about to land on `target`, after every `modifyDamage` in play (never below 0). */
  private modifiedDamage(target: SlotRef, amount: number): number {
    let result = amount

    for (const player of PLAYER_IDS) {
      for (const card of this.inPlay(player)) {
        const modify = getCard(card.cardId).modifyDamage

        if (modify) {
          result = modify(this.context(player, card), target, result)
        }
      }
    }

    return Math.max(0, Math.round(result))
  }

  private applyHeroDamage(player: PlayerId, amount: number, source?: DamageSource): number {
    const hero = this.player(player).hero
    const status = source?.status
    const element = source?.element
    // Poison, burns and shadow damage go past the armor (and don't wear it).
    const armor = status || element === 'shadow' || amount <= 0 ? null : hero.armor
    const absorbed = armor ? Math.min(armor.reduction, amount) : 0
    const rest = amount - absorbed

    hero.health -= rest
    this.emit({ type: 'damage', target: { player, slot: 'hero' }, amount: rest, absorbed, status, element })

    if (armor) {
      // Each hit takes 1 durability away; acid, 1 more.
      armor.durability -= element === 'acid' ? 2 : 1

      if (armor.durability <= 0) {
        this.destroyArmor(player)
      }
    }

    if (hero.health <= 0 && !hero.fallen) {
      hero.fallen = true
      this.emit({ type: 'heroFell', player })
    }

    return amount
  }

  private applyLifesteal(source: DamageSource | undefined, amount: number): void {
    if (source?.lifesteal && amount > 0) {
      this.heal({ player: source.player, slot: 'hero' }, amount)
    }
  }

  private processDeaths(): void {
    for (const player of PLAYER_IDS) {
      const state = this.player(player)

      for (let slot = 0; slot < ALLY_SLOTS; slot++) {
        const unit = state.allies[slot]

        if (!unit || unit.health > 0) {
          continue
        }

        state.allies[slot] = null
        this.emit({ type: 'death', player, cardId: unit.cardId, slot })

        const rival = opponentOf(player)

        for (const card of this.inPlay(rival)) {
          getCard(card.cardId).onEnemyAllyDeath?.(this.context(rival, card), unit)
        }

        for (const card of this.inPlay(player)) {
          getCard(card.cardId).onOwnAllyDeath?.(this.context(player, card), unit)
        }

        this.dropAttachments(player, unit)
        getCard(unit.cardId).onDeath?.(this.context(player, unit))

        if (this.hasKeyword(unit, 'echo') && !unit.echoUsed) {
          this.addToHand(player, { uid: this.newUid(), cardId: unit.cardId, echoUsed: true })
          this.emit({ type: 'returnToHand', player, cardId: unit.cardId })
        } else {
          state.discard.push({ uid: unit.uid, cardId: unit.cardId, defeated: true })
        }
      }
    }
  }

  /** An ally leaves the board: its attachments go to their owners' discard piles (and their "when it dies" runs). */
  dropAttachments(player: PlayerId, unit: Unit, died = true): void {
    for (const attachment of unit.attachments ?? []) {
      const owner = attachment.owner ?? player

      this.player(owner).discard.push({ uid: attachment.uid, cardId: attachment.cardId })

      if (died) {
        getCard(attachment.cardId).onHostDeath?.(this.context(owner, attachment), unit)
      }
    }

    unit.attachments = []
  }

  /** The ally an attachment is on (null when it is no longer in play). */
  hostOf(attachmentUid: number): { player: PlayerId; slot: number; unit: Unit } | null {
    for (const player of PLAYER_IDS) {
      for (let slot = 0; slot < ALLY_SLOTS; slot++) {
        const unit = this.player(player).allies[slot]

        if (unit?.attachments?.some((attachment) => attachment.uid === attachmentUid)) {
          return { player, slot, unit }
        }
      }
    }

    return null
  }

  /** Spends a use of an artifact: at 0 it goes to the discard pile. */
  spendCharge(player: PlayerId, artifactUid: number): void {
    const side = this.player(player)
    const artifact = side.artifacts.find((card) => card.uid === artifactUid)

    if (!artifact || artifact.charges == null) {
      return
    }

    artifact.charges--

    if (artifact.charges <= 0) {
      side.artifacts = side.artifacts.filter((card) => card.uid !== artifactUid)
      side.discard.push({ uid: artifact.uid, cardId: artifact.cardId })
      this.emit({ type: 'artifactSpent', player, cardId: artifact.cardId })
      this.artifactLeft(player, artifact)
    }
  }

  /** An artifact of `player` left play (destroyed or out of uses): the `onArtifactLeave` of its side's cards. */
  artifactLeft(player: PlayerId, artifact: CardInstance): void {
    for (const card of this.inPlay(player)) {
      getCard(card.cardId).onArtifactLeave?.(this.context(player, card), artifact)
    }
  }

  /** Artifacts of a player with uses (`charges`) gain `amount` more: one (its uid) or all of them. Returns how many. */
  recharge(player: PlayerId, which: number | 'all', amount: number): number {
    let count = 0

    for (const artifact of this.player(player).artifacts) {
      if (artifact.charges == null || amount <= 0 || (which !== 'all' && artifact.uid !== which)) {
        continue
      }

      artifact.charges += amount
      this.emit({ type: 'recharge', player, cardId: artifact.cardId, amount })
      count++
    }

    return count
  }

  /** The card of `player`'s support slots with that uid: an artifact or a face-down trap (null: none). */
  supportCard(player: PlayerId, uid: number | undefined): { kind: 'artifact' | 'trap'; card: CardInstance } | null {
    const side = this.player(player)
    const artifact = side.artifacts.find((card) => card.uid === uid)

    if (artifact) {
      return { kind: 'artifact', card: artifact }
    }

    const trap = side.traps.find((card) => card.uid === uid)

    return trap ? { kind: 'trap', card: trap } : null
  }

  /** Destroys a card of the support slots (an artifact or a trap). False when it is no longer there. */
  destroySupport(player: PlayerId, uid: number): boolean {
    const found = this.supportCard(player, uid)

    if (!found) {
      return false
    }

    const side = this.player(player)

    if (found.kind === 'trap') {
      side.traps = side.traps.filter((card) => card.uid !== uid)
      side.discard.push(found.card)
      this.emit({ type: 'gearDestroyed', player, cardId: found.card.cardId, kind: 'trap' })

      return true
    }

    return this.destroyArtifactsWhere((card, owner) => owner === player && card.uid === uid) > 0
  }

  /**
   * Switches off a card of the support slots (an artifact or a face-down trap) for the rest of this phase
   * and `phases` more. False when it is no longer there.
   */
  disableSupport(player: PlayerId, uid: number, phases: number): boolean {
    const found = this.supportCard(player, uid)

    if (!found) {
      return false
    }

    const untilPhase = this.state.phase + phases

    found.card.disabledUntilPhase = Math.max(found.card.disabledUntilPhase ?? 0, untilPhase)
    this.emit({ type: 'disabled', player, cardId: found.card.cardId, untilPhase })

    return true
  }

  /**
   * Consume X: banishes `count` cards of a discard pile, from the top, the allies last (rituals that bring
   * one back keep them). False, and nothing banished, when the pile has fewer.
   */
  consume(player: PlayerId, count: number): boolean {
    const side = this.player(player)

    if (count <= 0) {
      return true
    }

    if (side.discard.length < count) {
      return false
    }

    const order = side.discard
      .map((card, index) => ({ card, index, ally: getCard(card.cardId).type === 'ally' }))
      .sort((a, b) => Number(a.ally) - Number(b.ally) || b.index - a.index)
      .slice(0, count)
    const banished = new Set(order.map(({ card }) => card.uid))

    side.discard = side.discard.filter((card) => !banished.has(card.uid))
    this.emit({ type: 'consume', player, count })

    return true
  }

  // ─── Breaking the rival's gear ───────────────────────────────────────────

  /** Destroys the hero's weapon (to its discard pile). False when it has none. */
  destroyWeapon(player: PlayerId): boolean {
    const side = this.player(player)
    const weapon = side.hero.weapon

    if (!weapon) {
      return false
    }

    side.hero.weapon = null
    side.discard.push(weapon.card)
    this.emit({ type: 'gearDestroyed', player, cardId: weapon.card.cardId, kind: 'weapon' })

    return true
  }

  /** Destroys the hero's armor (to its discard pile). False when it has none. */
  destroyArmor(player: PlayerId): boolean {
    const side = this.player(player)
    const armor = side.hero.armor

    if (!armor) {
      return false
    }

    side.hero.armor = null
    side.discard.push(armor.card)
    this.emit({ type: 'gearDestroyed', player, cardId: armor.card.cardId, kind: 'armor' })

    return true
  }

  /** The hero's weapon loses durability (it breaks at 0). */
  wearWeapon(player: PlayerId, amount: number): void {
    const weapon = this.player(player).hero.weapon

    if (!weapon || amount <= 0) {
      return
    }

    weapon.durability -= amount
    this.emit({ type: 'gearWorn', player, kind: 'weapon', amount })

    if (weapon.durability <= 0) {
      this.destroyWeapon(player)
    }
  }

  /** The hero's armor loses durability (it breaks at 0). */
  wearArmor(player: PlayerId, amount: number): void {
    const armor = this.player(player).hero.armor

    if (!armor || amount <= 0) {
      return
    }

    armor.durability -= amount
    this.emit({ type: 'gearWorn', player, kind: 'armor', amount })

    if (armor.durability <= 0) {
      this.destroyArmor(player)
    }
  }

  /** The hero's weapon or armor gains durability. False when it has none. */
  repairGear(player: PlayerId, kind: 'weapon' | 'armor', amount: number): boolean {
    const gear = this.player(player).hero[kind]

    if (!gear || amount <= 0) {
      return false
    }

    gear.durability += amount
    this.emit({ type: 'gearRepaired', player, kind, amount })

    return true
  }

  /**
   * The card a target with `attached` points to: the hero's weapon or armor,
   * or a card attached to the ally in that slot (null when it is no longer there).
   */
  attachedAt(ref: SlotRef): AttachedTarget | null {
    if (ref.attached == null) {
      return null
    }

    if (ref.slot === 'hero') {
      const hero = this.player(ref.player).hero

      if (hero.weapon?.card.uid === ref.attached) {
        return { kind: 'weapon', card: hero.weapon.card }
      }

      if (hero.armor?.card.uid === ref.attached) {
        return { kind: 'armor', card: hero.armor.card }
      }

      return null
    }

    const host = this.targetUnit(ref)
    const card = host?.attachments?.find((attachment) => attachment.uid === ref.attached)

    return host && card ? { kind: 'attachment', card, host } : null
  }

  /**
   * Destroys the card a target with `attached` points to: the hero's weapon or
   * armor, or a card attached to an ally (it goes to its owner's discard pile
   * and the ally loses what it gave). False when it is no longer there.
   */
  destroyAttached(ref: SlotRef): boolean {
    const found = this.attachedAt(ref)

    if (!found) {
      return false
    }

    if (found.kind === 'weapon') {
      return this.destroyWeapon(ref.player)
    }

    if (found.kind === 'armor') {
      return this.destroyArmor(ref.player)
    }

    const { host, card } = found
    const definition = getCard(card.cardId)
    const owner = card.owner ?? ref.player

    host.attachments = (host.attachments ?? []).filter((attachment) => attachment.uid !== card.uid)
    this.detachStats(host, definition)
    this.player(owner).discard.push({ uid: card.uid, cardId: card.cardId })
    this.emit({ type: 'gearDestroyed', player: ref.player, cardId: card.cardId, kind: 'attachment' })

    return true
  }

  /** An ally loses what an attachment taken off it gave it: its attack, health, keywords and thorns. */
  private detachStats(unit: Unit, attachment: CardDefinition): void {
    unit.attack -= attachment.attack ?? 0

    const health = attachment.health ?? 0

    if (health > 0) {
      // It loses the extra max health; the damage it took stays (it never dies of this).
      unit.maxHealth = Math.max(1, unit.maxHealth - health)
      unit.health = Math.min(unit.health, unit.maxHealth)
    } else if (health < 0) {
      unit.maxHealth -= health
      unit.health -= health
    }

    const kept = new Set([
      ...(getCard(unit.cardId).keywords ?? []),
      ...(unit.attachments ?? []).flatMap((other) => getCard(other.cardId).keywords ?? [])
    ])

    for (const keyword of attachment.keywords ?? []) {
      if (!kept.has(keyword)) {
        unit.keywords = unit.keywords.filter((candidate) => candidate !== keyword)

        if (keyword === 'shield') {
          unit.shield = false
        }
      }
    }

    unit.thorns = Math.max(0, unit.thorns - (attachment.thorns ?? 0))
  }

  /** Destroys an artifact of a player: the most expensive one, the cheapest or a random one. */
  destroyArtifact(player: PlayerId, which: 'priciest' | 'cheapest' | 'random' = 'priciest'): boolean {
    const side = this.player(player)

    if (side.artifacts.length === 0) {
      return false
    }

    let artifact: CardInstance

    if (which === 'random') {
      artifact = side.artifacts[Math.floor(this.random() * side.artifacts.length)]
    } else {
      const sorted = [...side.artifacts].sort((a, b) => getCard(b.cardId).cost - getCard(a.cardId).cost)

      artifact = which === 'priciest' ? sorted[0] : sorted[sorted.length - 1]
    }

    side.artifacts = side.artifacts.filter((card) => card.uid !== artifact.uid)
    side.discard.push({ uid: artifact.uid, cardId: artifact.cardId })
    this.emit({ type: 'gearDestroyed', player, cardId: artifact.cardId, kind: 'artifact' })
    this.artifactLeft(player, artifact)

    return true
  }

  /** Destroys every artifact in play, of both players, that `matches` (to the discard pile); how many. */
  destroyArtifactsWhere(matches: (card: CardInstance, player: PlayerId) => boolean): number {
    let count = 0

    for (const player of PLAYER_IDS) {
      const side = this.player(player)

      for (const artifact of side.artifacts.filter((card) => matches(card, player))) {
        side.artifacts = side.artifacts.filter((card) => card.uid !== artifact.uid)
        side.discard.push({ uid: artifact.uid, cardId: artifact.cardId })
        this.emit({ type: 'gearDestroyed', player, cardId: artifact.cardId, kind: 'artifact' })
        this.artifactLeft(player, artifact)
        count++
      }
    }

    return count
  }

  /** Destroys a random face-down trap of a player (it is revealed as it goes to the discard pile). */
  destroyTrap(player: PlayerId): boolean {
    const side = this.player(player)

    if (side.traps.length === 0) {
      return false
    }

    const [trap] = side.traps.splice(Math.floor(this.random() * side.traps.length), 1)

    side.discard.push(trap)
    this.emit({ type: 'gearDestroyed', player, cardId: trap.cardId, kind: 'trap' })

    return true
  }

  /** Free support slots of a player (traps and artifacts share them). */
  freeSupport(player: PlayerId): number {
    const side = this.player(player)

    return SUPPORT_SLOTS - side.traps.length - side.artifacts.length
  }

  heal(target: SlotRef, amount: number): number {
    if (amount <= 0) {
      return 0
    }

    if (target.slot === 'hero') {
      const hero = this.player(target.player).hero
      const healed = Math.min(amount, hero.maxHealth - hero.health)

      if (healed > 0 && !hero.fallen) {
        hero.health += healed
        this.emit({ type: 'heal', target, amount: healed })
      }

      return healed
    }

    const unit = this.targetUnit(target)

    if (!unit) {
      return 0
    }

    const healed = Math.min(amount, unit.maxHealth - unit.health)

    if (healed > 0) {
      unit.health += healed
      this.emit({ type: 'heal', target, amount: healed })
    }

    return healed
  }

  // ─── Other effects ─────────────────────────────────────────────────────────

  buff(uid: number, attack: number, health: number): void {
    const found = this.findUnit(uid)

    if (!found) {
      return
    }

    found.unit.attack += attack
    found.unit.health += health
    found.unit.maxHealth += health
    this.emit({ type: 'buff', target: { player: found.player, slot: found.slot }, attack, health })
  }

  /** Extra attack until the end of the phase. */
  tempBuff(uid: number, attack: number): void {
    const found = this.findUnit(uid)

    if (found) {
      found.unit.tempAttack += attack
      this.emit({ type: 'buff', target: { player: found.player, slot: found.slot }, attack, health: 0 })
    }
  }

  /** The ally can't act for the rest of this phase (and `extraPhases` more). */
  stun(uid: number, extraPhases = 0): void {
    const found = this.findUnit(uid)

    if (found) {
      found.unit.stunnedUntilPhase = Math.max(found.unit.stunnedUntilPhase, this.state.phase + extraPhases)
      this.emit({ type: 'stun', target: { player: found.player, slot: found.slot } })
    }
  }

  destroy(uid: number): void {
    const found = this.findUnit(uid)

    if (found) {
      this.damageUnit(uid, found.unit.health + found.unit.maxHealth, { player: opponentOf(found.player), poison: true })
    }
  }

  /** A lasting effect on a whole side until the end of the phase `phases` phases from now (1: the next one). */
  addBoon(player: PlayerId, kind: BoonKind, amount: number, phases = 1): void {
    const side = this.player(player)
    const untilPhase = this.state.phase + phases

    side.boons = [...(side.boons ?? []), { kind, amount, untilPhase }]
    this.emit({ type: 'boon', player, kind, amount, untilPhase })
  }

  /** The allies of a side gain `stealth` and +`attack` until the end of the phase `phases` phases from now. */
  veilAllies(player: PlayerId, attack: number, phases = 1): void {
    const untilPhase = this.state.phase + phases

    for (const unit of this.allies(player)) {
      const stealth = !unit.keywords.includes('stealth')

      if (stealth) {
        unit.keywords.push('stealth')
      }

      unit.veil = { attack, stealth: stealth || !!unit.veil?.stealth, untilPhase }
    }

    this.emit({ type: 'veil', player, attack, untilPhase })
  }

  /** The player discards `count` random cards of the hand when the current phase ends. */
  scheduleDiscard(player: PlayerId, count: number): void {
    const side = this.player(player)

    side.discardAtPhaseEnd = (side.discardAtPhaseEnd ?? 0) + count
  }

  /** The discards scheduled for the end of the phase (the cards programmed this phase are already spent). */
  discardScheduled(): void {
    for (const id of PLAYER_IDS) {
      const side = this.player(id)

      for (let i = 0; i < (side.discardAtPhaseEnd ?? 0) && side.hand.length > 0; i++) {
        const [card] = side.hand.splice(Math.floor(this.random() * side.hand.length), 1)

        side.discard.push(card)
        this.emit({ type: 'discard', player: id, cardId: card.cardId })
      }

      delete side.discardAtPhaseEnd
    }
  }

  /** Ends the boons and veils that are past (at the start of a phase). */
  expireBoons(): void {
    for (const id of PLAYER_IDS) {
      const side = this.player(id)

      if (side.boons) {
        side.boons = side.boons.filter((boon) => boon.untilPhase >= this.state.phase)
      }

      for (const unit of this.allies(id)) {
        if (unit.prey && unit.prey.untilPhase < this.state.phase) {
          delete unit.prey
        }

        if (unit.veil && unit.veil.untilPhase < this.state.phase) {
          if (unit.veil.stealth) {
            unit.keywords = unit.keywords.filter((keyword) => keyword !== 'stealth')
          }

          delete unit.veil
        }
      }
    }
  }

  /**
   * Puts in play, without paying it, an artifact of the deck (the first copy of `cardId`), then shuffles the
   * deck. False when there is none or the support slots are full.
   */
  playArtifactFromDeck(player: PlayerId, cardId: string): boolean {
    const side = this.player(player)
    const card = side.deck.find((candidate) => candidate.cardId === cardId)
    const definition = card && getCard(card.cardId)

    if (!card || definition?.type !== 'artifact' || this.freeSupport(player) <= 0) {
      return false
    }

    side.deck = side.deck.filter((candidate) => candidate.uid !== card.uid)
    side.artifacts.push({ uid: card.uid, cardId: card.cardId, charges: definition.charges })
    this.emit({ type: 'artifact', player, cardId: definition.id })
    definition.onPlay?.(this.context(player, card))
    this.shuffle(side.deck)

    return true
  }

  /** Adds (or, negative, takes away) energy, between 0 and MAX_ENERGY. */
  gainEnergy(player: PlayerId, amount: number, announce = true): void {
    const side = this.player(player)
    const before = side.energy ?? 0

    side.energy = Math.max(0, Math.min(MAX_ENERGY, before + amount))

    if (announce && side.energy !== before) {
      this.emit({ type: 'energy', player, amount: side.energy - before })
    }
  }

  /** The hero or the ally a slot points to, to give it a status effect. */
  private afflicted(target: SlotRef): Afflictions | null {
    if (target.slot === 'hero') {
      const hero = this.player(target.player).hero

      return hero.health > 0 ? hero : null
    }

    const unit = this.targetUnit(target)

    return unit && unit.health > 0 ? unit : null
  }

  /** The slot where a hero or an ally is now (allies may have moved since the target was chosen). */
  private refOf(target: SlotRef, subject: Afflictions): SlotRef {
    if (target.slot === 'hero') {
      return target
    }

    const found = this.findUnit((subject as Unit).uid)

    return found ? { player: found.player, slot: found.slot } : target
  }

  /**
   * Gives a status effect: `poison` adds `amount` to the poison, `burn` burns
   * for `amount` a phase during `phases` phases, `freeze` freezes for the rest
   * of this phase and `amount` more.
   */
  afflict(target: SlotRef, status: StatusKind, amount: number, phases = BURN_PHASES): boolean {
    const subject = this.afflicted(target)

    if (!subject || amount < 0) {
      return false
    }

    if (status === 'poison') {
      subject.poison = (subject.poison ?? 0) + amount
    } else if (status === 'burn') {
      subject.burn = Math.max(subject.burn ?? 0, amount)
      subject.burnPhases = Math.max(subject.burnPhases ?? 0, phases)
    } else {
      subject.frozenUntilPhase = Math.max(subject.frozenUntilPhase ?? 0, this.state.phase + amount)
    }

    this.emit({ type: 'status', target: this.refOf(target, subject), status, amount })

    return true
  }

  /** Removes every status effect of a hero or an ally. */
  cleanse(target: SlotRef): void {
    const subject = this.afflicted(target)

    if (subject && (subject.poison || subject.burn || this.isFrozen(subject))) {
      subject.poison = 0
      subject.burn = 0
      subject.burnPhases = 0
      subject.frozenUntilPhase = 0
      this.emit({ type: 'cleanse', target: this.refOf(target, subject) })
    }
  }

  /** Poison and burns hurt (at the start of each phase): the poison drops by 1, the burn has one phase less. */
  tickAfflictions(): void {
    for (const player of PLAYER_IDS) {
      const side = this.player(player)
      const subjects: { subject: Afflictions; hit: (amount: number, status: StatusKind) => void }[] = [
        { subject: side.hero, hit: (amount, status) => this.damageHero(player, amount, { player, status }) }
      ]

      for (const unit of this.allies(player)) {
        subjects.push({ subject: unit, hit: (amount, status) => this.damageUnit(unit.uid, amount, { player, status }) })
      }

      for (const { subject, hit } of subjects) {
        if (subject.poison && subject.poison > 0) {
          hit(subject.poison, 'poison')
          subject.poison--
        }

        if (subject.burn && subject.burnPhases && subject.burnPhases > 0) {
          hit(subject.burn, 'burn')
          subject.burnPhases--

          if (subject.burnPhases <= 0) {
            subject.burn = 0
          }
        }
      }
    }
  }

  gainChronos(player: PlayerId, amount: number): void {
    this.player(player).chronos += amount
    this.emit({ type: 'chronos', player, amount })
  }

  addToHand(player: PlayerId, card: CardInstance): void {
    const state = this.player(player)

    if (state.hand.length >= MAX_HAND) {
      state.discard.push(card)
      this.emit({ type: 'burn', player, cardId: card.cardId })
    } else {
      state.hand.push(card)
    }
  }

  /** Draws cards: from an empty deck each draw costs fatigue damage instead. */
  draw(player: PlayerId, count: number): void {
    const state = this.player(player)

    for (let i = 0; i < count; i++) {
      const card = state.deck.pop()

      if (!card) {
        const damage = FATIGUE_START + FATIGUE_STEP * state.fatigue

        state.fatigue++
        this.emit({ type: 'fatigue', player, damage })
        this.damageHero(player, damage)
        continue
      }

      if (state.hand.length >= MAX_HAND) {
        state.discard.push(card)
        this.emit({ type: 'burn', player, cardId: card.cardId })
      } else {
        state.hand.push(card)
        this.emit({ type: 'draw', player, cardUid: card.uid })
      }
    }
  }

  /** Puts an ally on the board, in `slot` or the nearest free one. Returns it (null when the 5 slots are taken). */
  summon(player: PlayerId, card: CardInstance, slot?: number): Unit | null {
    const free = this.freeSlots(player)

    if (free.length === 0) {
      this.player(player).discard.push(card)

      return null
    }

    const wanted = slot ?? free[0]
    const chosen = free.reduce((best, candidate) =>
      Math.abs(candidate - wanted) < Math.abs(best - wanted) ? candidate : best
    )
    const definition = getCard(card.cardId)
    const unit: Unit = {
      uid: card.uid,
      cardId: card.cardId,
      attack: definition.attack ?? 0,
      health: definition.health ?? 1,
      maxHealth: definition.health ?? 1,
      keywords: [...(definition.keywords ?? [])],
      thorns: definition.thorns ?? 0,
      shield: definition.keywords?.includes('shield') ?? false,
      enteredPhase: this.state.phase,
      enteredStep: this.state.step,
      attacksThisPhase: 0,
      abilityUsedThisPhase: false,
      tempAttack: 0,
      stunnedUntilPhase: 0,
      echoUsed: card.echoUsed ?? false
    }

    this.player(player).allies[chosen] = unit
    this.emit({ type: 'summon', player, cardId: card.cardId, uid: unit.uid, slot: chosen })
    definition.onEnter?.(this.context(player, unit))

    for (const other of this.inPlay(player)) {
      if (other.uid !== unit.uid) {
        getCard(other.cardId).onAllyEnter?.(this.context(player, other), unit)
      }
    }

    this.triggerTrap(opponentOf(player), 'enemySummon', { player, slot: chosen })

    return unit
  }

  /** Moves an ally to an empty slot, or swaps it with the ally there (a neighbor, or any one with `agile`). */
  moveAlly(uid: number, toSlot: number): boolean {
    const found = this.findUnit(uid)

    if (!found || toSlot < 0 || toSlot >= ALLY_SLOTS || toSlot === found.slot) {
      return false
    }

    const allies = this.player(found.player).allies
    const other = allies[toSlot]

    if (other && Math.abs(toSlot - found.slot) > 1 && !this.hasKeyword(found.unit, 'agile')) {
      return false
    }

    allies[toSlot] = found.unit
    allies[found.slot] = other

    this.emit({ type: 'move', player: found.player, uid, from: found.slot, to: toSlot })

    if (other) {
      this.emit({ type: 'move', player: found.player, uid: other.uid, from: toSlot, to: found.slot })
    }

    return true
  }

  // ─── Traps ─────────────────────────────────────────────────────────────────

  /** Sets off the first trap of `owner` that answers `trigger`. Returns whether it cancelled what the enemy was doing. */
  triggerTrap(owner: PlayerId, trigger: TrapTrigger, unit?: SlotRef): boolean {
    const state = this.player(owner)
    const index = state.traps.findIndex((trap) => getCard(trap.cardId).trigger === trigger && !this.isDisabled(trap))

    if (index < 0) {
      return false
    }

    const [trap] = state.traps.splice(index, 1)
    let cancelled = false
    const event: TrapEvent = { trigger, unit, cancel: () => (cancelled = true) }

    this.emit({ type: 'trapTriggered', player: owner, cardId: trap.cardId })
    getCard(trap.cardId).onTrigger?.(this.context(owner, trap, unit ? [unit] : []), event)
    state.discard.push(trap)

    for (const card of this.inPlay(owner)) {
      getCard(card.cardId).onTrapTriggered?.(this.context(owner, card), getCard(trap.cardId))
    }

    return cancelled
  }

  // ─── Card logic ────────────────────────────────────────────────────────────

  context(
    owner: PlayerId,
    self: { uid: number; cardId: string },
    targets: SlotRef[] = [],
    choice?: string,
    options: { spell?: boolean } = {}
  ): EffectContext {
    return {
      engine: this,
      owner,
      opponent: opponentOf(owner),
      self: { uid: self.uid, cardId: self.cardId },
      targets,
      ...(choice != null ? { choice } : {}),
      ...(options.spell ? { spell: true } : {}),
      random: () => this.random()
    }
  }

  /** `player` played a card (it already did its thing): the `onOwnerPlay` of every other card of its side in play. */
  ownerPlayed(player: PlayerId, card: { uid: number; cardId: string }): void {
    const definition = getCard(card.cardId)

    for (const other of this.inPlay(player)) {
      if (other.uid !== card.uid) {
        getCard(other.cardId).onOwnerPlay?.(this.context(player, other), definition)
      }
    }
  }

  /** The extra damage the cards in play of the attacker's side give an attack (`attackBonus`). */
  attackBonus(attacker: SlotRef, target: SlotRef): number {
    let bonus = 0

    for (const card of this.inPlay(attacker.player)) {
      const aura = getCard(card.cardId).attackBonus

      if (aura) {
        bonus += aura(this.context(attacker.player, card), attacker, target)
      }
    }

    return bonus
  }

  /** The extra damage the cards in play of `player` give its attacks against a Prey (`preyBonus`). */
  preyBonus(player: PlayerId): number {
    return this.inPlay(player).reduce((total, card) => total + (getCard(card.cardId).preyBonus ?? 0), 0)
  }

  /**
   * Every card of a side that is in play: the hero, its weapon and armor, its
   * location, its artifacts, its allies and the attachments it played (on its
   * allies or on the rival's).
   */
  inPlay(player: PlayerId): { uid: number; cardId: string }[] {
    const state = this.player(player)
    const cards: { uid: number; cardId: string }[] = [state.hero]

    if (state.hero.weapon) {
      cards.push(state.hero.weapon.card)
    }

    if (state.hero.armor) {
      cards.push(state.hero.armor.card)
    }

    if (state.location) {
      cards.push(state.location)
    }

    // A hacked artifact does nothing while it is switched off.
    cards.push(...state.artifacts.filter((card) => !this.isDisabled(card)))

    const attachments = PLAYER_IDS.flatMap((side) =>
      this.allies(side).flatMap((unit) => (unit.attachments ?? []).filter((card) => (card.owner ?? side) === player))
    )

    return [...cards, ...this.allies(player), ...attachments]
  }

  dispatch(player: PlayerId, hook: SharedHook): void {
    for (const card of this.inPlay(player)) {
      const definition: CardDefinition = getCard(card.cardId)

      definition[hook]?.(this.context(player, card))
    }
  }

  // ─── End of the match ──────────────────────────────────────────────────────

  /** Ends the match when a hero fell (a draw when both did). Returns whether it ended. */
  checkVictory(): boolean {
    if (this.state.status === 'finished') {
      return true
    }

    const fallenA = this.player('a').hero.fallen
    const fallenB = this.player('b').hero.fallen

    if (!fallenA && !fallenB) {
      return false
    }

    this.finish(fallenA && fallenB ? null : fallenA ? 'b' : 'a', 'hero')

    return true
  }

  finish(winner: PlayerId | null, reason: 'hero' | 'phaseLimit' | 'surrender' | 'abandon'): void {
    this.state.status = 'finished'
    this.state.result = { winner, reason }
    this.emit({ type: 'end', winner, reason })
  }
}
