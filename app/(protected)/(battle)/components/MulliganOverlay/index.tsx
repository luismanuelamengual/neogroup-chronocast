'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import MiniCard from '@/app/(protected)/(battle)/components/MiniCard'
import { CardInstance } from '@/app/(protected)/(engine)/models/MatchState'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** Seconds left to a deadline, refreshed every quarter of a second (null: no deadline). */
function useSecondsLeft(deadline: number | null): number | null {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (deadline == null) {
      return
    }

    const timer = setInterval(() => setNow(Date.now()), 250)

    return () => clearInterval(timer)
  }, [deadline])

  return deadline == null ? null : Math.max(0, Math.ceil((deadline - now) / 1000))
}

/** The width of the cards (px), so the whole hand fits the window. */
function useCardWidth(count: number): number {
  const [width, setWidth] = useState(96)

  useEffect(() => {
    const measure = () =>
      setWidth(Math.min(130, (window.innerHeight * 0.42) / 1.4, (window.innerWidth * 0.86) / Math.max(1, count) - 8))

    measure()
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [count])

  return width
}

/**
 * The opening hand, before phase 1: the player marks the cards to replace
 * (once). Online there is a deadline, and after confirming the player waits
 * for the rival.
 */
export default function MulliganOverlay({
  hand,
  onConfirm,
  waiting = false,
  deadline = null
}: {
  hand: CardInstance[]
  onConfirm: (cardUids: number[]) => void
  waiting?: boolean
  deadline?: number | null
}) {
  const t = useT()
  const [marked, setMarked] = useState<number[]>([])
  const left = useSecondsLeft(deadline)
  const cardWidth = useCardWidth(hand.length)
  const toggle = (uid: number) =>
    setMarked((current) => (current.includes(uid) ? current.filter((value) => value !== uid) : [...current, uid]))

  return (
    <div className="mulligan-overlay">
      <div className="mulligan-overlay__panel">
        <h2>{t('battle.mulligan.title')}</h2>
        <p>{t('battle.mulligan.text')}</p>
        <div className="mulligan-overlay__cards">
          {hand.map((card) => (
            <button
              key={card.uid}
              type="button"
              className={classNames('mulligan-overlay__card', { marked: marked.includes(card.uid) })}
              onClick={() => !waiting && toggle(card.uid)}
            >
              <MiniCard cardId={card.cardId} width={cardWidth} />
              {marked.includes(card.uid) && <span className="mulligan-overlay__swap">🔄</span>}
            </button>
          ))}
        </div>
        {waiting ? (
          <p className="mulligan-overlay__waiting">{t('battle.mulligan.waiting')}</p>
        ) : (
          <GameButton color="primary" onClick={() => onConfirm(marked)}>
            {marked.length > 0 ? t('battle.mulligan.change', { count: marked.length }) : t('battle.mulligan.keep')}
            {left != null && ` · ${left}`}
          </GameButton>
        )}
      </div>
    </div>
  )
}
