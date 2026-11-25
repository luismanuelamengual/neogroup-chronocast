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

/**
 * A hero's ability that takes a card of the deck: the player taps the one to
 * put in play. Only the cards that can be chosen are shown, one per card
 * (with how many copies there are), never the order of the deck.
 */
export default function DeckPickOverlay({
  options,
  onPick,
  onClose
}: {
  options: { cardId: string; copies: number }[]
  onPick: (cardId: string) => void
  onClose: () => void
}) {
  const t = useT()
  const cardWidth = useCardWidth(options.length)

  return (
    <div className="deck-pick-overlay" onClick={onClose}>
      <div className="deck-pick-overlay__panel" onClick={(event) => event.stopPropagation()}>
        <h2>{t('battle.deckPick.title')}</h2>
        <p>{t('battle.deckPick.text')}</p>
        <div className="deck-pick-overlay__cards">
          {options.map(({ cardId, copies }) => (
            <button key={cardId} type="button" className="deck-pick-overlay__card" onClick={() => onPick(cardId)}>
              <MiniCard cardId={cardId} width={cardWidth} />
              {copies > 1 && <span className="deck-pick-overlay__copies">×{copies}</span>}
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
