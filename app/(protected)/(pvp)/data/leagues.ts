/** The leagues of the rating (docs/PLAN.md, section 10.1), from the lowest. `min`: the rating it starts at. */
export const LEAGUES = [
  { id: 'apprentice', min: 0 },
  { id: 'traveler', min: 1100 },
  { id: 'chronicler', min: 1300 },
  { id: 'guardian', min: 1500 },
  { id: 'timelord', min: 1700 },
  { id: 'eternal', min: 1900 }
] as const

export type LeagueId = (typeof LEAGUES)[number]['id']

export function leagueOf(rating: number): LeagueId {
  return [...LEAGUES].reverse().find((league) => rating >= league.min)!.id
}
