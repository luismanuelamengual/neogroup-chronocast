import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** A card outside the board (deck, hand, discard pile, traps) or attached to the hero. */
export interface CardInstance {
  /** Unique within the match. */
  uid: number
  cardId: string
  /** An `echo` card that already came back to the hand once. */
  echoUsed?: boolean
}

/** An ally on the board. */
export interface Unit {
  uid: number
  cardId: string
  attack: number
  health: number
  maxHealth: number
  keywords: Keyword[]
  /** Damage it deals to whoever attacks it (`thorns`). */
  thorns: number
  /** `shield` not used yet. */
  shield: boolean
  /** Phase and step it entered on (it acts from the next phase; with `charge`, from the next step). */
  enteredPhase: number
  enteredStep: number
  attacksThisPhase: number
  /** Used its ability this phase (then it doesn't attack, and the other way around). */
  abilityUsedThisPhase: boolean
  /** Extra attack until the end of the phase. */
  tempAttack: number
  /** It can't act while the phase is not past this one. */
  stunnedUntilPhase: number
  echoUsed: boolean
}

export interface HeroState {
  uid: number
  cardId: string
  health: number
  maxHealth: number
  /** Armor points: they take the damage before the health. */
  armor: number
  /** The armor card attached (it is discarded when the armor runs out). */
  armorCard: CardInstance | null
  weapon: { card: CardInstance; attack: number; durability: number } | null
  attackedThisPhase: boolean
  abilityUsedThisPhase: boolean
  /** Reached 0 health during the current step. */
  fallen: boolean
}

export interface PlayerState {
  id: PlayerId
  hero: HeroState
  /** The 5 ally slots (null: empty). */
  allies: (Unit | null)[]
  hand: CardInstance[]
  /** The top of the deck is the end of the array. */
  deck: CardInstance[]
  discard: CardInstance[]
  location: CardInstance | null
  traps: CardInstance[]
  /** Chronos available this phase and capacity (refilled at the start of each phase). */
  chronos: number
  chronosCapacity: number
  sacrificesThisPhase: number
  /** Draws from an empty deck so far. */
  fatigue: number
  /** Phases in a row with nothing programmed (PvP counts them as abandon). */
  idlePhases: number
  mulliganDone: boolean
}

export type MatchEndReason = 'hero' | 'phaseLimit' | 'surrender' | 'abandon'

export interface MatchResult {
  /** Null: a draw. */
  winner: PlayerId | null
  reason: MatchEndReason
}

export interface MatchState {
  seed: number
  /** State of the seeded random generator. */
  rng: number
  /** Current phase (1, 2...) and step being resolved (0 to 4; -1 while programming). */
  phase: number
  step: number
  status: 'planning' | 'finished'
  players: Record<PlayerId, PlayerState>
  nextUid: number
  result: MatchResult | null
}
