'use client'

import './index.scss'
import { useEffect, useState } from 'react'
import MiniCard from '@/app/(protected)/(battle)/components/MiniCard'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** The width of the cards (px): big enough to read on a phone in landscape, and all of them in one row if they fit. */
function useCardWidth(count: number): number {
  const [width, setWidth] = useState(96)

  useEffect(() => {
    const measure = () =>
      setWidth(Math.max(64, Math.min(120, (window.innerHeight * 0.45) / 1.4, (window.innerWidth * 0.86) / count - 8)))

    measure()
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [count])

  return width
}

/** A card the player can pick: `key` is what `onPick` gets back. */
export interface PickOption {
  key: string
  /** Null: a face-down card (a rival's trap). */
  cardId: string | null
  /** Copies of it (shown when more than one). */
  copies?: number
  /** A short line under the card (what it is, its numbers). */
  note?: string
}

/**
 * The player taps one card of a few, shown big enough to read on a phone in
 * landscape. By default, a hero's ability that takes a card of the deck: only
 * the cards that can be chosen are shown, one per card (with how many copies
 * there are), never the order of the deck. With `title` and `text`, any other
 * choice of a card (e.g. which of the cards attached to a hero or an ally to aim at).
 */
export default function DeckPickOverlay({
  options,
  onPick,
  onClose,
  title,
  text
}: {
  options: PickOption[]
  onPick: (key: string) => void
  onClose: () => void
  title?: string
  text?: string
}) {
  const t = useT()
  const cardWidth = useCardWidth(options.length)

  return (
    <div className="deck-pick-overlay" onClick={onClose}>
      <div className="deck-pick-overlay__panel" onClick={(event) => event.stopPropagation()}>
        <h2>{title ?? t('battle.deckPick.title')}</h2>
        <p>{text ?? t('battle.deckPick.text')}</p>
        <div className="deck-pick-overlay__cards">
          {options.map(({ key, cardId, copies = 1, note }) => (
            <button key={key} type="button" className="deck-pick-overlay__card" onClick={() => onPick(key)}>
              <MiniCard cardId={cardId} width={cardWidth} />
              {copies > 1 && <span className="deck-pick-overlay__copies">×{copies}</span>}
              {note && (
                <span className="deck-pick-overlay__note" style={{ width: cardWidth }}>
                  {note}
                </span>
              )}
            </button>
          ))}
        </div>
        <GameButton color="secondary" onClick={onClose}>
          {t('battle.deckPick.cancel')}
        </GameButton>
      </div>
    </div>
  )
}
