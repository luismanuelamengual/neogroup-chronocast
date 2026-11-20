/**
 * Speed of an action. Within a step, the actions of both players resolve from
 * the fastest to the slowest; actions of the same speed are simultaneous.
 */
export const SPEEDS = ['instant', 'fast', 'normal', 'slow'] as const

export type Speed = (typeof SPEEDS)[number]
