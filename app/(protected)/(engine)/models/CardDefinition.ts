import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { EffectContext } from '@/app/(protected)/(engine)/models/EffectContext'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { HeroClass } from '@/app/(protected)/(engine)/models/HeroClass'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { FailReason } from '@/app/(protected)/(engine)/models/MatchEvent'
import { Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { Restriction } from '@/app/(protected)/(engine)/models/Restriction'
import { Side } from '@/app/(protected)/(engine)/models/Side'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Speed } from '@/app/(protected)/(engine)/models/Speed'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { Tribe } from '@/app/(protected)/(engine)/models/Tribe'

/**
 * An active ability: programmed as an action of the timeline, once per phase,
 * for its cost in Chronos. Heroes have one; some allies too (an ally that uses
 * its ability doesn't attack that phase, and the other way around).
 */
export interface ActiveAbility {
  name: string
  text: string
  /** In Chronos, or in energy with `resource: 'energy'` (a hero's ability is always paid with energy). */
  cost: number
  resource?: AbilityResource
  speed?: Speed
  targets?: TargetKind[]
  /** A card the player chooses when programming it (it arrives as `ctx.choice`): an artifact of the deck. */
  choice?: AbilityChoice
  /** Why it can't be used now (checked before paying, so nothing is spent); null: it can. */
  canActivate?(ctx: EffectContext): FailReason | null
  /** Hints for the AI, like the ones of a card (`heal`, `removal`, `revive`, `buffAll`...): when using it is worth it. */
  ai?: { tags?: string[] }
  activate(ctx: EffectContext): void
}

/** What a player chooses for an ability, besides its targets. */
export type AbilityChoice = 'deckArtifact'

/** What an ability is paid with. */
export type AbilityResource = 'chronos' | 'energy'

/** The ability of a hero (the same as an ally's). */
export type HeroAbility = ActiveAbility

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
  /** A token: only other cards create it (never in collections, decks, packs or the shop). */
  token?: boolean
  /** Allies: the family it belongs to (other cards care about it). */
  tribe?: Tribe
  /** The element of all the damage it deals: its effects and, for allies and weapons, its attacks (none: physical). */
  element?: Element
  /** Allies and heroes: elements it takes half damage from. */
  resist?: Element[]
  /** Allies and heroes: elements it takes double damage from. */
  weak?: Element[]
  /** Cost in Chronos (0 for heroes). */
  cost: number
  /** Speed of the action that plays it (traps and moves are instant; the rest normal by default). */
  speed?: Speed
  keywords?: Keyword[]
  /** Damage dealt to whoever attacks it, with the `thorns` keyword. */
  thorns?: number
  /** Allies and weapons; attachments: the attack they add to their ally (negative takes it away). */
  attack?: number
  /** Allies and heroes; attachments: the health they add to their ally (negative takes it away). */
  health?: number
  /** Weapons: attacks before it breaks. Armors: hits it takes before it breaks. */
  durability?: number
  /** Armors: damage it takes away from each hit on the hero. */
  armor?: number
  /** Heroes. */
  heroClass?: HeroClass
  /** Heroes: their side, Dawn or Eclipse (docs/PLAN.md, section 4.1.1). */
  side?: Side
  /** Heroes and some allies. */
  ability?: ActiveAbility
  /** What the player chooses when programming it (abilities, items). */
  targets?: TargetKind[]
  /** Traps. */
  trigger?: TrapTrigger
  /** Artifacts: uses before it is discarded (spent with `spendCharge`); none: it stays for good. */
  charges?: number
  /** Hints for the computer player. */
  ai?: { value: number; tags?: string[] }
  /** The subject of its illustration (the art prompt adds the style and the faction look). */
  art: { subject: string }

  /** Abilities, items, weapons, armors, attachments, artifacts and locations: when it is played. */
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
  /**
   * Any card in play, and attachments wherever they are: changes a damage
   * about to land on `target` (return the new amount). Runs before shields
   * and armor; a poisonous hit still destroys.
   */
  modifyDamage?(ctx: EffectContext, target: SlotRef, amount: number): number
  /** Attachments: when the ally it is attached to dies. */
  onHostDeath?(ctx: EffectContext, host: Unit): void
  /** Attachments: each time the ally it is attached to attacks (before the hit). */
  onHostAttack?(ctx: EffectContext, host: Unit): void
  /** Attachments: the ally it is attached to can't attack. */
  disarms?: boolean
  /** Attachments: the ally it is attached to can't use its ability. */
  silences?: boolean
}
