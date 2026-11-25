'use client'

import './index.scss'
import { LevelGain } from '@/app/(protected)/(progression)/models/LevelGain'
import { useI18n } from '@/app/i18n/I18nProvider'

/**
 * The XP a battle paid, shown at its end: "+X XP", the bar of the current
 * level and, when the player went up, the new level and its gold.
 */
export default function LevelGainView({ gain }: { gain: LevelGain }) {
  const { t, locale } = useI18n()
  const percent = Math.min(100, Math.round((gain.xpInLevel / gain.xpForNext) * 100))

  return (
    <div className="level-gain">
      <div className="level-gain__row">
        <span className="level-gain__level">{t('progression.levelShort', { level: gain.level })}</span>
        <span className="level-gain__bar" aria-hidden="true">
          <span style={{ width: `${percent}%` }} />
        </span>
        <span className="level-gain__xp">{t('progression.xpGained', { xp: gain.xp.toLocaleString(locale) })}</span>
      </div>
      {gain.levelsGained > 0 && (
        <p className="level-gain__up">
          🎉 {t('progression.levelUp', { level: gain.level, gold: gain.gold.toLocaleString(locale) })}
        </p>
      )}
    </div>
  )
}
