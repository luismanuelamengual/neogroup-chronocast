/** The two sides of a match. */
export type PlayerId = 'a' | 'b'

export const PLAYER_IDS: PlayerId[] = ['a', 'b']

export function opponentOf(player: PlayerId): PlayerId {
  return player === 'a' ? 'b' : 'a'
}
