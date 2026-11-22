/**
 * Every number of the battle rules (docs/PLAN.md, section 2). The balance
 * scripts (`yarn duel`) tune them: change them here and nowhere else.
 */

/** Actions each player programs per phase. */
export const ACTIONS_PER_PHASE = 6

/** Seconds to program the timeline of a phase. */
export const PLANNING_SECONDS = 90

/** Ally slots of each player, in a row in front of the hero. */
export const ALLY_SLOTS = 5

/** Cards in the opening hand, and the most a hand can hold (extra draws are burned to the discard pile). */
export const STARTING_HAND = 7
export const MAX_HAND = 7

/** Cards drawn at the start of every phase (except the first). Drawing more is up to the cards. */
export const DRAW_PER_PHASE = 1

/** Energy each hero gains at the start of every phase (it is kept from phase to phase), and the most it can store. */
export const ENERGY_PER_PHASE = 1
export const MAX_ENERGY = 10

/** Default phases a burn lasts. */
export const BURN_PHASES = 3

/** "Generate Chronos" actions allowed per phase. Each one adds +1 to the Chronos capacity for good. */
export const MAX_SACRIFICES_PER_PHASE = 1

/** Support slots of each player: its traps (face down) and artifacts share them. */
export const SUPPORT_SLOTS = 5

/** Damage of the first draw from an empty deck, and how much it grows on each one after it. */
export const FATIGUE_START = 10
export const FATIGUE_STEP = 5

/** After this phase the hero with more health wins (a draw when they are even). */
export const PHASE_LIMIT = 30

/** Hero health range (validated in the catalog). */
export const HERO_MIN_HEALTH = 45
export const HERO_MAX_HEALTH = 60

/** Deck size (the hero included), copies per card and copies of a card with the `unique` keyword. */
export const MIN_DECK_SIZE = 40
export const MAX_DECK_SIZE = 200
export const MAX_COPIES = 4
export const MAX_UNIQUE_COPIES = 1

/** Rating (Prestige): starting value, K factor (the most a match can move it) and floor. */
export const STARTING_RATING = 1200
export const RATING_K = 30
export const MIN_RATING = 100

/** PvP: phases in a row with nothing programmed that lose the match by abandon. */
export const ABANDON_IDLE_PHASES = 3

/**
 * Card types out of the game for now: they are not sold, don't come in packs,
 * can't be added to a deck, and the copies already in a deck are left out of
 * the match (their cards stay in the catalog, so saved collections still load).
 * Campaign rewards of these types stay in the game.
 */
export const RETIRED_CARD_TYPES: readonly string[] = ['location']
