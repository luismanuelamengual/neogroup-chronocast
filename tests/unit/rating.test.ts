import { describe, expect, it } from 'vitest'
import { applyRating, ratingDelta } from '@/app/(protected)/(engine)/utils/rating'

describe('rating', () => {
  it('equal ratings move 15 points either way', () => {
    expect(ratingDelta(1200, 1200, 1)).toBe(15)
    expect(ratingDelta(1200, 1200, 0)).toBe(-15)
    expect(ratingDelta(1200, 1200, 0.5)).toBe(0)
  })

  it('beating a stronger rival is worth more, never more than 30', () => {
    expect(ratingDelta(1000, 1400, 1)).toBeGreaterThan(25)
    expect(ratingDelta(100, 3000, 1)).toBeLessThanOrEqual(30)
  })

  it('a win always adds and a loss always takes at least 1', () => {
    expect(ratingDelta(3000, 100, 1)).toBe(1)
    expect(ratingDelta(100, 3000, 0)).toBe(-1)
  })

  it('never goes below the floor', () => {
    expect(applyRating(110, -15)).toBe(100)
    expect(applyRating(1200, 15)).toBe(1215)
  })
})
