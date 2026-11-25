'use client'

import './index.scss'
import classNames from 'classnames'
import { LevelProgress } from '@/app/(protected)/(progression)/models/LevelGain'
import { useI18n } from '@/app/i18n/I18nProvider'

/** The player's level with the bar of its XP to the next one (main menu, shop). */
export default function LevelBadge({ progress, className }: { progress: LevelProgress; className?: string }) {
  const { t, locale } = useI18n()
  const percent = Math.min(100, Math.round((progress.xpInLevel / progress.xpForNext) * 100))
  const title = `${t('progression.level')} ${progress.level} · ${t('progression.xpProgress', {
    xp: progress.xpInLevel.toLocaleString(locale),
    next: progress.xpForNext.toLocaleString(locale)
  })}`

  return (
    <span className={classNames('level-badge', className)} title={title} aria-label={title}>
      <span className="level-badge__level">{t('progression.levelShort', { level: progress.level })}</span>
      <span className="level-badge__bar" aria-hidden="true">
        <span style={{ width: `${percent}%` }} />
      </span>
    </span>
  )
}
