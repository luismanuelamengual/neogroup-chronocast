'use client'

import './index.scss'
import { useEffect, useState } from 'react'
import HandCard from '@/app/(protected)/(battle)/components/HandCard'
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
  const toggle = (uid: number) =>
    setMarked((current) => (current.includes(uid) ? current.filter((value) => value !== uid) : [...current, uid]))

  return (
    <div className="mulligan-overlay">
      <div className="mulligan-overlay__panel">
        <h2>{t('battle.mulligan.title')}</h2>
        <p>{t('battle.mulligan.text')}</p>
        <div className="mulligan-overlay__cards">
          {hand.map((card) => (
            <HandCard
              key={card.uid}
              cardId={card.cardId}
              marked={marked.includes(card.uid)}
              onClick={() => !waiting && toggle(card.uid)}
            />
          ))}
        </div>
        {waiting ? (
          <p className="mulligan-overlay__waiting">{t('battle.mulligan.waiting')}</p>
        ) : (
          <GameButton color={marked.length > 0 ? 'magenta' : 'lime'} onClick={() => onConfirm(marked)}>
            {marked.length > 0 ? t('battle.mulligan.change', { count: marked.length }) : t('battle.mulligan.keep')}
            {left != null && ` · ${left}`}
          </GameButton>
        )}
      </div>
    </div>
  )
}
