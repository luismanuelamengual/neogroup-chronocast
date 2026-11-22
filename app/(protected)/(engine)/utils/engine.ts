import {
  ALLY_SLOTS,
  BURN_PHASES,
  FATIGUE_START,
  FATIGUE_STEP,
  MAX_ENERGY,
  MAX_HAND,
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
import { Afflictions, CardInstance, MatchState, PlayerState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
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

  hasKeyword(unit: Unit, keyword: Keyword): boolean {
    return unit.keywords.includes(keyword)
  }

  attackOf(unit: Unit): number {
    return Math.max(0, unit.attack + unit.tempAttack)
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
  }

  /**
   * A damage about to land on `target` (`unit` when it is an ally): the
   * element's own multiplier, then resistances and vulnerabilities, then every
   * `modifyDamage` in play (arcane damage skips the reductions). Never below 0.
   */
  private elementalDamage(target: SlotRef, unit: Unit | null, amount: number, source?: DamageSource): number {
    const element = source?.element

    if (!element || source?.status) {
      return this.modifiedDamage(target, amount)
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
      return Math.max(0, Math.round(result))
    }

    if (definition.resist?.includes(element)) {
      result = Math.ceil(result / 2)
    }

    return this.modifiedDamage(target, result)
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
    // Poison, burns and shadow damage go past the armor.
    const absorbed = status || element === 'shadow' ? 0 : Math.min(hero.armor, amount)
    const rest = amount - absorbed

    hero.armor -= absorbed

    // Acid breaks one more armor point.
    if (element === 'acid' && !status && hero.armor > 0) {
      hero.armor--
    }

    hero.health -= rest
    this.emit({ type: 'damage', target: { player, slot: 'hero' }, amount: rest, absorbed, status, element })

    if (hero.armor <= 0 && hero.armorCard) {
      this.player(player).discard.push(hero.armorCard)
      hero.armorCard = null
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
        this.dropAttachments(player, unit)
        getCard(unit.cardId).onDeath?.(this.context(player, unit))

        if (this.hasKeyword(unit, 'echo') && !unit.echoUsed) {
          this.addToHand(player, { uid: this.newUid(), cardId: unit.cardId, echoUsed: true })
          this.emit({ type: 'returnToHand', player, cardId: unit.cardId })
        } else {
          state.discard.push({ uid: unit.uid, cardId: unit.cardId })
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
    }
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

  /** Takes away all the hero's armor (its armor card goes to the discard pile). False when it has none. */
  destroyArmor(player: PlayerId): boolean {
    const hero = this.player(player).hero

    if (hero.armor <= 0 && !hero.armorCard) {
      return false
    }

    const cardId = hero.armorCard?.cardId

    hero.armor = 0

    if (hero.armorCard) {
      this.player(player).discard.push(hero.armorCard)
      hero.armorCard = null
    }

    this.emit(
      cardId
        ? { type: 'gearDestroyed', player, cardId, kind: 'armor' }
        : { type: 'gearWorn', player, kind: 'armor', amount: 0 }
    )

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

  /** The hero loses armor points (its armor card breaks at 0). */
  wearArmor(player: PlayerId, amount: number): void {
    const hero = this.player(player).hero
    const lost = Math.min(hero.armor, amount)

    if (lost <= 0) {
      return
    }

    hero.armor -= lost
    this.emit({ type: 'gearWorn', player, kind: 'armor', amount: lost })

    if (hero.armor <= 0) {
      this.destroyArmor(player)
    }
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

    return true
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
    const index = state.traps.findIndex((trap) => getCard(trap.cardId).trigger === trigger)

    if (index < 0) {
      return false
    }

    const [trap] = state.traps.splice(index, 1)
    let cancelled = false
    const event: TrapEvent = { trigger, unit, cancel: () => (cancelled = true) }

    this.emit({ type: 'trapTriggered', player: owner, cardId: trap.cardId })
    getCard(trap.cardId).onTrigger?.(this.context(owner, trap, unit ? [unit] : []), event)
    state.discard.push(trap)

    return cancelled
  }

  // ─── Card logic ────────────────────────────────────────────────────────────

  context(owner: PlayerId, self: { uid: number; cardId: string }, targets: SlotRef[] = []): EffectContext {
    return {
      engine: this,
      owner,
      opponent: opponentOf(owner),
      self: { uid: self.uid, cardId: self.cardId },
      targets,
      random: () => this.random()
    }
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

    if (state.hero.armorCard) {
      cards.push(state.hero.armorCard)
    }

    if (state.location) {
      cards.push(state.location)
    }

    cards.push(...state.artifacts)

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
