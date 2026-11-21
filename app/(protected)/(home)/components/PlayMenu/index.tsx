'use client'

import './index.scss'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import MenuSection from '@/app/(protected)/(home)/components/MenuSection'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** The game modes, each one illustrated with the art of a card that fits it. */
const MODES = [
  { key: 'campaign', icon: '🗺️', color: 'lime', href: '/campaign', art: 'aldric-dawnkeeper-portrait' },
  { key: 'online', icon: '⚔️', color: 'magenta', href: '/lobby', art: 'arena-champion' }
] as const

/**
 * Play (/play): where the "Play" of the main menu leads, to choose the game
 * mode: the hero's campaign or an online match against another player. Every
 * mode plays with the active deck.
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
          <MenuSection
            key={mode.key}
            className={`play-menu__mode mode-${mode.key}`}
            href={mode.href}
            label={t(`play.modes.${mode.key}.title`)}
            text={t(`play.modes.${mode.key}.text`)}
            art={mode.art}
            icon={mode.icon}
            color={mode.color}
          />
        ))}
      </nav>
    </div>
  )
}
