/** A difficulty level of the computer player (docs/PLAN.md, section 13.2). */
export interface AiLevel {
  level: number
  /** Phases simulated ahead (0: no simulation, the greedy timeline). */
  depth: number
  /** Candidate timelines tried (one per style of ai/chooseTimeline.ts). */
  candidates: number
  /** Likely responses of the rival each candidate is tried against. */
  responses: number
  /** Defensive cards first when the hero is under pressure. */
  defense: boolean
  /** Chance of a worse choice than the best one. */
  noise: number
}

export const AI_LEVELS: AiLevel[] = [
  { level: 1, depth: 0, candidates: 1, responses: 0, defense: false, noise: 0.35 },
  { level: 2, depth: 0, candidates: 1, responses: 0, defense: true, noise: 0.2 },
  { level: 3, depth: 1, candidates: 6, responses: 2, defense: true, noise: 0.15 },
  { level: 4, depth: 1, candidates: 12, responses: 3, defense: true, noise: 0.05 },
  { level: 5, depth: 2, candidates: 12, responses: 3, defense: true, noise: 0 },
  { level: 6, depth: 2, candidates: 24, responses: 3, defense: true, noise: 0 }
]

export const MAX_AI_LEVEL = AI_LEVELS.length
