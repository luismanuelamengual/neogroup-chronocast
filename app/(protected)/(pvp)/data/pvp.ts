/** The numbers of PvP (docs/PLAN.md, section 12): change them here and nowhere else. */

/** A room without a rival closes after this long. */
export const ROOM_TTL_MS = 10 * 60 * 1000

/** Seconds to choose the cards to replace of the opening hand. */
export const MULLIGAN_SECONDS = 30

/** Extra time after a deadline before the server resolves without a missing timeline (the network is not instant). */
export const DEADLINE_GRACE_MS = 3000

/** How often the screen asks for news of the match. */
export const POLL_MS = 1500

/** How often the lobby refreshes the list of rooms. */
export const ROOMS_POLL_MS = 5000

/** Letters of the codes of private rooms (no I, O nor similar ones, to read them aloud). */
export const CODE_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
export const CODE_LENGTH = 6

/** Phases resolved at most in one request (when a player comes back after a long time away). */
export const MAX_CATCH_UP = 12
