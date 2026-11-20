'use client'

import './index.scss'
import { PhaseLog } from '@/app/(protected)/(battle)/stores/battle'
import { describeEvent } from '@/app/(protected)/(battle)/utils/describeEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

interface BattleLogProps {
  log: PhaseLog[]
  state: MatchState
  onClose: () => void
}

/** The written log of the match, newest phase first. */
export default function BattleLog({ log, state, onClose }: BattleLogProps) {
  const t = useT()
  const cardName = useCardName()

  return (
    <div className="battle-log" onClick={onClose}>
      <aside className="battle-log__panel" onClick={(event) => event.stopPropagation()}>
        <header>
          <h2>{t('battle.log')}</h2>
          <button type="button" onClick={onClose} aria-label={t('common.close')}>
            ✕
          </button>
        </header>
        {log.length === 0 && <p className="battle-log__empty">{t('battle.logEmpty')}</p>}
        {[...log].reverse().map((entry) => (
          <section key={entry.phase}>
            <h3>{t('battle.phase', { phase: entry.phase })}</h3>
            <ol>
              {entry.events
                .filter((event) => event.type !== 'phaseStart')
                .map((event) => describeEvent(event, t, state, cardName))
                .map((line, index) => line && <li key={index}>{line}</li>)}
            </ol>
          </section>
        ))}
      </aside>
    </div>
  )
}
