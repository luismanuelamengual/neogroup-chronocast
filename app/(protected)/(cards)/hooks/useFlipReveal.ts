'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import { RARITIES } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** From this rarity up a card shines (and sounds brighter) when it flips. */
export const SHINE_FROM = RARITIES.indexOf('rare')

/** Whether a card shines when it flips. */
export function shines(cardId: string): boolean {
  return RARITIES.indexOf(getCard(cardId).rarity) >= SHINE_FROM
}

/**
 * Cards dealt face down, to flip one by one (`flip`, which also shows the card
 * big) or all of them in a row (`revealAll`, one every `step` ms). A card face
 * up is shown big again with `open`. Each card that turns sounds, brighter for
 * the best ones.
 */
export function useFlipReveal(cards: string[], step: number) {
  const [flipped, setFlipped] = useState<boolean[]>(() => cards.map(() => false))
  const [auto, setAuto] = useState(false)
  const [spotlight, setSpotlight] = useState<number | null>(null)
  const done = flipped.every(Boolean)
  const lastFlipped = useRef(flipped)

  useEffect(() => {
    if (!auto || done) {
      return
    }

    const timer = setTimeout(() => {
      setFlipped((current) => {
        const next = [...current]

        next[next.indexOf(false)] = true

        return next
      })
    }, step)

    return () => clearTimeout(timer)
  }, [auto, done, flipped, step])

  useEffect(() => {
    const before = lastFlipped.current

    lastFlipped.current = flipped

    const turned = cards.filter((_, index) => flipped[index] && !before[index])

    if (turned.length > 0) {
      playSfx(turned.some(shines) ? 'rare-reveal' : 'card-flip')
    }
  }, [flipped, cards])

  const close = useCallback(() => setSpotlight(null), [])

  // A card turned by hand is shown big at once; the ones turned by "Flip them all" are not.
  const flip = (index: number) => {
    setFlipped((current) => current.map((value, i) => value || i === index))
    setSpotlight(index)
  }

  return {
    flipped,
    flip,
    revealAll: () => setAuto(true),
    revealing: auto,
    done,
    /** The card shown big (null: none). */
    spotlight,
    open: (index: number) => setSpotlight(index),
    close
  }
}
