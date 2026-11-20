'use client'

import './index.scss'
import { useState } from 'react'
import { BattleMode } from '@/app/(protected)/(battle)/stores/battle'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** Remembers that the player finished (or skipped) the tutorial. */
export const TUTORIAL_DONE_KEY = 'chronocast.tutorialDone'

type TipKey = 'mulligan' | 'phases' | 'chronos' | 'summon' | 'ready' | 'resolution' | 'attack' | 'move' | 'win'

/** The tips of the guided first match, in order, and when each one shows up. */
const TIPS: { key: TipKey; when: (mode: BattleMode, phase: number) => boolean }[] = [
  { key: 'mulligan', when: (mode) => mode === 'mulligan' },
  { key: 'phases', when: (mode, phase) => mode === 'planning' && phase === 1 },
  { key: 'chronos', when: (mode, phase) => mode === 'planning' && phase === 1 },
  { key: 'summon', when: (mode, phase) => mode === 'planning' && phase === 1 },
  { key: 'ready', when: (mode, phase) => mode === 'planning' && phase === 1 },
  { key: 'resolution', when: (mode) => mode === 'resolving' },
  { key: 'attack', when: (mode, phase) => mode === 'planning' && phase >= 2 },
  { key: 'move', when: (mode, phase) => mode === 'planning' && phase >= 2 },
  { key: 'win', when: (mode, phase) => mode === 'planning' && phase >= 3 }
]

/**
 * The guided first match (docs/PLAN.md, section 6.2): a bubble over the battle
 * explains phases, Chronos, slots, movement and speed as they come up.
 */
export default function TutorialCoach({ mode, phase }: { mode: BattleMode; phase: number }) {
  const t = useT()
  const [index, setIndex] = useState(0)
  const tip = TIPS[index]

  const finish = () => {
    localStorage.setItem(TUTORIAL_DONE_KEY, '1')
    setIndex(TIPS.length)
  }

  if (!tip || !tip.when(mode, phase)) {
    return null
  }

  return (
    <div className={`tutorial-coach mode-${mode}`} role="dialog">
      <span className="tutorial-coach__step">
        {index + 1}/{TIPS.length}
      </span>
      <p>{t(`tutorial.tips.${tip.key}`)}</p>
      <div>
        <button type="button" onClick={finish}>
          {t('tutorial.skip')}
        </button>
        <GameButton
          size="small"
          color="gold"
          onClick={() => (index === TIPS.length - 1 ? finish() : setIndex(index + 1))}
        >
          {t('tutorial.next')}
        </GameButton>
      </div>
    </div>
  )
}
