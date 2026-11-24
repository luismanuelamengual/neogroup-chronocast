'use client'

import './index.scss'
import classNames from 'classnames'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import type { PlayerReward } from '@/app/(protected)/(pvp)/models/MatchView'
import GameButton from '@/app/components/GameButton'
import { useI18n } from '@/app/i18n/I18nProvider'

interface BattleEndProps {
  state: MatchState
  me: PlayerId
  /** An online match: its rewards, and back to the lobby instead of a rematch. */
  online?: boolean
  reward?: PlayerReward | null
  onRematch: () => void
  onChangeHeroes: () => void
  /** The text of the second button against the computer (default: change heroes). */
  changeLabel?: string
  /** A line under the rewards (a quick match: verifying, or no more gold today). */
  rewardNote?: string | null
}

/** The end of the match: victory, defeat or draw, why, and what to do next. */
export default function BattleEnd({
  state,
  me,
  online = false,
  reward = null,
  onRematch,
  onChangeHeroes,
  changeLabel,
  rewardNote = null
}: BattleEndProps) {
  const { t, locale } = useI18n()
  const winner = state.result?.winner
  const outcome = winner == null ? 'draw' : winner === me ? 'victory' : 'defeat'

  return (
    <div className="battle-end">
      <div className={classNames('battle-end__panel', outcome)}>
        <h2>{t(`battle.end.${outcome}`)}</h2>
        <p>
          {state.result && t(`battle.end.${state.result.reason}`)} · {t('battle.end.phases', { count: state.phase })}
        </p>
        {reward && (
          <div className="battle-end__rewards">
            {reward.ratingDelta !== 0 && (
              <span className={reward.ratingDelta > 0 ? 'up' : 'down'}>
                ⭐ {reward.ratingDelta > 0 ? '+' : ''}
                {reward.ratingDelta} → {reward.rating.toLocaleString(locale)}
              </span>
            )}
            <span>🪙 +{reward.gold.toLocaleString(locale)}</span>
            {reward.firstWin && <span className="first">{t('battle.end.firstWin')}</span>}
          </div>
        )}
        {rewardNote && <p className="battle-end__note">{rewardNote}</p>}
        <div className="battle-end__buttons">
          {online ? (
            <GameButton color="gold" onClick={onChangeHeroes}>
              {t('battle.end.lobby')}
            </GameButton>
          ) : (
            <>
              <GameButton color="gold" onClick={onRematch}>
                {t('battle.end.rematch')}
              </GameButton>
              <GameButton color="cyan" onClick={onChangeHeroes}>
                {changeLabel ?? t('battle.end.changeHeroes')}
              </GameButton>
            </>
          )}
          <GameButton color="ghost" href="/menu">
            {t('battle.end.menu')}
          </GameButton>
        </div>
      </div>
    </div>
  )
}
