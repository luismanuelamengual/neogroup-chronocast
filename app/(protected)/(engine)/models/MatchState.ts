import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** A card outside the board (deck, hand, discard pile, traps) or attached to the hero. */
export interface CardInstance {
  /** Unique within the match. */
  uid: number
  cardId: string
  /** An `echo` card that already came back to the hand once. */
  echoUsed?: boolean
  /** In a discard pile: an ally that got there by dying on the board (not discarded from the hand). */
  defeated?: boolean
  /** An attachment: who played it (it can be on a rival's ally; it goes to this player's discard pile). */
  owner?: PlayerId
  /** An artifact: uses left (it is discarded at 0). */
  charges?: number
  /** An artifact: its ability was already used this phase. */
  abilityUsedThisPhase?: boolean
  /**
   * An artifact or a face-down trap switched off by an enemy (a hack): while the phase is not past this one,
   * its effects and its ability don't work and a trap doesn't go off.
   */
  disabledUntilPhase?: number
}

/** Lasting status effects on a hero or an ally. */
export interface Afflictions {
  /** Poisoned: loses this much health at the start of each phase, and the poison drops by 1. */
  poison?: number
  /** Burning: loses this much health at the start of each phase, for `burnPhases` phases. */
  burn?: number
  burnPhases?: number
  /** Frozen: it can't attack, move or use abilities while the phase is not past this one. */
  frozenUntilPhase?: number
}

/** An ally on the board. */
export interface Unit extends Afflictions {
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
  /**
   * Under contract: an enemy hero took control of it (it is on that hero's side) while the phase is not past
   * `untilPhase`; then it goes back to `owner`. Its cards (and its own, when it dies) go to `owner`'s piles.
   */
  contract?: { owner: PlayerId; untilPhase: number }
  /** Cards attached to the ally (shown under it; discarded when it leaves the board). */
  attachments?: CardInstance[]
  /**
   * A hero's ability hid it: +`attack` and `stealth` (when `stealth`, the ability gave it) while the phase
   * is not past `untilPhase`. That stealth isn't lost by attacking (sonic damage still breaks it).
   */
  veil?: { attack: number; stealth: boolean; untilPhase: number }
  /**
   * Marked as Prey by `by` (docs/FACTIONS.md): the ranged attacks of that player deal it PREY_DAMAGE more
   * while the phase is not past `untilPhase`.
   */
  prey?: { by: PlayerId; untilPhase: number }
  /** It attacked at least once since it entered (an aura can hide it only until it attacks). */
  hasAttacked?: boolean
  /** It can't attack while the phase is not past this one (it can still use its ability). */
  disarmedUntilPhase?: number
  /** It loses these keywords while the phase is not past `untilPhase`. */
  suppressed?: { keywords: Keyword[]; untilPhase: number }
  /** Who dealt the damage that killed it (set when it dies): the side, the ally (null: the hero) and whether it was an attack. */
  killedBy?: { player: PlayerId; uid: number | null; attack: boolean }
  /** It dies at the end of the current phase. */
  doomed?: boolean
}

/**
 * A lasting effect on a whole side, from a hero's ability, while the phase is not past `untilPhase`:
 *   - guard:        the damage its allies take is `amount` less (not arcane damage)
 *   - empower:      the damage it deals to the rival's hero and allies is `amount` more
 *   - allyDiscount: its allies cost `amount` Chronos less (never below 0)
 */
export interface Boon {
  kind: BoonKind
  amount: number
  untilPhase: number
}

export type BoonKind = 'guard' | 'empower' | 'allyDiscount'

export interface HeroState extends Afflictions {
  uid: number
  cardId: string
  health: number
  maxHealth: number
  /**
   * The armor equipped: each hit on the hero loses `reduction` damage and
   * takes 1 durability away (it is discarded at 0).
   */
  armor: { card: CardInstance; reduction: number; durability: number } | null
  weapon: { card: CardInstance; attack: number; durability: number } | null
  attackedThisPhase: boolean
  abilityUsedThisPhase: boolean
  /** Reached 0 health during the current step. */
  fallen: boolean
  /**
   * A hero's ability hid it (stealth) while the phase is not past `untilPhase`: enemy attacks and enemy
   * targeted cards and abilities can't aim at it (sonic damage breaks it).
   */
  veil?: { untilPhase: number }
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
  /** Face down. Traps and artifacts share the SUPPORT_SLOTS. */
  traps: CardInstance[]
  /** Support cards that stay in play with a lasting effect. */
  artifacts: CardInstance[]
  /** Chronos available this phase and capacity (refilled at the start of each phase). */
  chronos: number
  chronosCapacity: number
  /** Energy stored by the hero: it grows each phase and pays the hero's ability (and some allies'). */
  energy: number
  /** Lasting effects on the whole side (from a hero's ability). */
  boons?: Boon[]
  /** Random cards of the hand it discards when the current phase ends (an enemy hero's ability). */
  discardAtPhaseEnd?: number
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
  /** Current phase (1, 2...) and step being resolved (0 to 5; -1 while programming). */
  phase: number
  step: number
  status: 'planning' | 'finished'
  players: Record<PlayerId, PlayerState>
  nextUid: number
  result: MatchResult | null
}
