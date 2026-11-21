'use client'

import './index.scss'
import Link from 'next/link'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** The game modes, the main ones first. */
const MODES = [
  { key: 'campaign', icon: '🗺️', color: 'lime', href: '/campaign' },
  { key: 'online', icon: '⚔️', color: 'magenta', href: '/lobby' },
  { key: 'practice', icon: '🤖', color: 'cyan', href: '/practice' }
] as const

/**
 * Play (/play): where the "Play" of the main menu leads, to choose the game
 * mode: the hero's campaign, an online match against another player or a
 * practice against the CPU. Every mode plays with the active deck.
 */
export default function PlayMenu() {
  useMusic('menu')
  const t = useT()

  return (
    <div className="play-menu">
      <Backdrop />
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('play.back')}
        </GameButton>
        <h1>{t('play.title')}</h1>
      </header>
      <nav className="play-menu__modes" aria-label={t('play.title')}>
        {MODES.map((mode) => (
          <Link key={mode.key} href={mode.href} className={`play-menu__mode color-${mode.color} mode-${mode.key}`}>
            <span className="play-menu__icon" aria-hidden="true">
              {mode.icon}
            </span>
            <strong>{t(`play.modes.${mode.key}.title`)}</strong>
            <span className="play-menu__text">{t(`play.modes.${mode.key}.text`)}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
