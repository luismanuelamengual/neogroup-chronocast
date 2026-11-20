import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { EffectContext } from '@/app/(protected)/(engine)/models/EffectContext'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { HeroClass } from '@/app/(protected)/(engine)/models/HeroClass'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { Restriction } from '@/app/(protected)/(engine)/models/Restriction'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Speed } from '@/app/(protected)/(engine)/models/Speed'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'

/** The active ability of a hero: once per phase, for its cost in Chronos. */
export interface HeroAbility {
  name: string
  text: string
  cost: number
  speed?: Speed
  targets?: TargetKind[]
  activate(ctx: EffectContext): void
}

/** What sets a trap off. */
export type TrapTrigger = 'enemyAttack' | 'enemySummon' | 'enemyAbility'

/** The trigger of a trap: what the enemy is doing. `cancel()` stops it (an attack, an ability). */
export interface TrapEvent {
  trigger: TrapTrigger
  /** The enemy ally attacking or just summoned, when there is one. */
  unit?: SlotRef
  cancel(): void
}

/**
 * A card: its data and its logic. Each card is one file in
 * app/(protected)/(cards)/cards/ that default-exports `defineCard({...})`.
 * Every text is in English (the Spanish translation lives in app/i18n/cards).
 */
export interface CardDefinition {
  /** The file name, in kebab-case. It never changes: collections and decks store it. */
  id: string
  type: CardType
  name: string
  /** Rules text shown on the card (the keywords are added to it automatically). */
  text: string
  flavor?: string
  faction: Faction
  restriction: Restriction
  rarity: Rarity
  /** Price of the single card in the shop (within the range of its rarity). */
  price?: number
  /** A campaign reward: it never comes in packs and the shop doesn't sell it (docs/PLAN.md, section 11.2). */
  reward?: boolean
  /** A campaign boss or one of its cards: only the computer plays it (never in collections, packs or the shop). */
  boss?: boolean
  /** Cost in Chronos (0 for heroes). */
  cost: number
  /** Speed of the action that plays it (traps and moves are instant; the rest normal by default). */
  speed?: Speed
  keywords?: Keyword[]
  /** Damage dealt to whoever attacks it, with the `thorns` keyword. */
  thorns?: number
  /** Allies and weapons. */
  attack?: number
  /** Allies and heroes. */
  health?: number
  /** Weapons: attacks before it breaks. */
  durability?: number
  /** Armors: armor points. */
  armor?: number
  /** Heroes. */
  heroClass?: HeroClass
  ability?: HeroAbility
  /** What the player chooses when programming it (abilities, items). */
  targets?: TargetKind[]
  /** Traps. */
  trigger?: TrapTrigger
  /** Hints for the computer player. */
  ai?: { value: number; tags?: string[] }
  /** The subject of its illustration (the art prompt adds the style and the faction look). */
  art: { subject: string }

  /** Abilities, items, weapons, armors and locations: when it is played. */
  onPlay?(ctx: EffectContext): void
  /** Allies: when it enters the board. */
  onEnter?(ctx: EffectContext): void
  /** Any card in play: when another ally of its owner enters. */
  onAllyEnter?(ctx: EffectContext, ally: Unit): void
  /** Allies: when it attacks. */
  onAttack?(ctx: EffectContext, target: SlotRef): void
  /** Allies: after it takes damage. */
  onDamaged?(ctx: EffectContext, amount: number): void
  /** Allies: when it dies. */
  onDeath?(ctx: EffectContext): void
  /** Any card in play: at the start of each phase. */
  onPhaseStart?(ctx: EffectContext): void
  /** Any card in play: at the end of each phase. */
  onPhaseEnd?(ctx: EffectContext): void
  /** Traps: when the trigger happens. */
  onTrigger?(ctx: EffectContext, event: TrapEvent): void
}
