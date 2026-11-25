'use client'

import './index.scss'
import classNames from 'classnames'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { LEAGUES } from '@/app/(protected)/(pvp)/data/leagues'
import { Ranking } from '@/app/(protected)/(ranking)/models/RankingEntry'
import GameButton from '@/app/components/GameButton'
import { useI18n } from '@/app/i18n/I18nProvider'

const MEDALS = ['🥇', '🥈', '🥉']

/** The ranking (/ranking): the top 100 by Prestige with their leagues, and the player's own position. */
export default function RankingView({ ranking, userId }: { ranking: Ranking; userId: number }) {
  useMusic('menu')
  const { t, locale } = useI18n()
  const leagues = [...LEAGUES].reverse()

  return (
    <div className="ranking-view">
      <header>
        <GameButton color="secondary" size="small" href="/menu">
          ← {t('ranking.back')}
        </GameButton>
        <h1>{t('ranking.title')}</h1>
        {ranking.me ? (
          <span className={`ranking-view__mine league-${ranking.me.league}`}>
            {t('ranking.yourPosition', { position: ranking.me.position })} · ⭐{' '}
            {ranking.me.rating.toLocaleString(locale)} · {t(`leagues.${ranking.me.league}`)}
          </span>
        ) : (
          <span className="ranking-view__mine">{t('ranking.notRanked')}</span>
        )}
      </header>
      <div className="ranking-view__body">
        {ranking.top.length === 0 ? (
          <p className="ranking-view__empty">{t('ranking.empty')}</p>
        ) : (
          <ol className="ranking-view__list">
            {ranking.top.map((entry) => (
              <li key={entry.userId} className={classNames(`league-${entry.league}`, { me: entry.userId === userId })}>
                <span className="ranking-view__position">{MEDALS[entry.position - 1] ?? entry.position}</span>
                <span className="ranking-view__name">{entry.name}</span>
                <span className="ranking-view__league">{t(`leagues.${entry.league}`)}</span>
                <span className="ranking-view__matches">{t('ranking.matches', { count: entry.matches })}</span>
                <span className="ranking-view__rating">⭐ {entry.rating.toLocaleString(locale)}</span>
              </li>
            ))}
          </ol>
        )}
        <aside className="ranking-view__leagues">
          <h2>{t('ranking.leagues')}</h2>
          <ul>
            {leagues.map((league, index) => (
              <li key={league.id} className={`league-${league.id}`}>
                <strong>{t(`leagues.${league.id}`)}</strong>
                <span>
                  {index === 0
                    ? `${league.min.toLocaleString(locale)}+`
                    : league.min === 0
                      ? `< ${leagues[index - 1].min.toLocaleString(locale)}`
                      : `${league.min.toLocaleString(locale)} – ${(leagues[index - 1].min - 1).toLocaleString(locale)}`}
                </span>
              </li>
            ))}
          </ul>
          <p>{t('ranking.note')}</p>
        </aside>
      </div>
    </div>
  )
}
