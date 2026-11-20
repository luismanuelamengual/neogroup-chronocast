/** The eras of the Time Rift; `neutral` cards (the Wanderers) go in any deck. */
export const FACTIONS = ['primal', 'bronze', 'arcane', 'clockwork', 'neon', 'void', 'neutral'] as const

export type Faction = (typeof FACTIONS)[number]
