'use client'

import './index.scss'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import SoundButton from '@/app/(protected)/(art)/components/SoundButton'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { useUserStore } from '@/app/(protected)/stores/users'
import InstallAppBanner from '@/app/(pwa)/components/InstallAppBanner'
import { clearCachedPages } from '@/app/(pwa)/utils/offlinePages'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import Logo from '@/app/components/Logo'
import { useI18n } from '@/app/i18n/I18nProvider'
import { formatBuiltAt, versionLabel } from '@/app/utils/version'

/** The sections of the game: they open as each phase of the roadmap lands (see docs/PLAN.md). */
const SECTIONS = [
  { key: 'play', icon: '⚔️', color: 'magenta', href: '/play' },
  { key: 'decks', icon: '🃏', color: 'violet', href: '/decks' },
  { key: 'shop', icon: '🛒', color: 'gold', href: '/shop' },
  { key: 'ranking', icon: '🏆', color: 'cyan', href: '/ranking' }
] as const

/**
 * Main menu (/menu): the logo, the player's gold and Prestige, the sections of
 * the game, the profile and sign out. The version of the running build sits at
 * the bottom, to tell whether a new deploy has been picked up.
 */
export default function MainMenu({ gold, rating }: { gold: number; rating: number }) {
  const { t, locale } = useI18n()
  const user = useUserStore((state) => state.user)
  // Formatted after mount: the build time renders in the device's time zone,
  // which the server doesn't know.
  const [builtAt, setBuiltAt] = useState('')

  useMusic('menu')

  useEffect(() => {
    setBuiltAt(formatBuiltAt(locale))
  }, [locale])

  const logout = async () => {
    // The pages kept for offline play show this account: forget them.
    await clearCachedPages()
    await signOut({ redirectTo: '/login' })
  }

  return (
    <div className="main-menu">
      <Backdrop />
      <div className="install">
        <InstallAppBanner />
      </div>
      <header className="top-bar">
        <Logo size="small" />
        <div className="stats">
          <SoundButton className="sound" />
          <span className="stat gold" title={t('home.gold')}>
            <span className="icon" aria-hidden="true">
              🪙
            </span>
            {gold.toLocaleString(locale)}
          </span>
          <span className="stat rating" title={t('home.rating')}>
            <span className="icon" aria-hidden="true">
              ⭐
            </span>
            {rating.toLocaleString(locale)}
          </span>
        </div>
      </header>
      <main className="center">
        <section className="hero">
          <Logo size="large" />
          <p className="tagline">{t('home.tagline')}</p>
        </section>
        <nav className="sections" aria-label={t('metadata.mainMenu')}>
          {SECTIONS.map((section) => (
            <GameButton
              key={section.key}
              className="section"
              color={section.color}
              size="large"
              href={section.href ?? undefined}
              disabled={!section.href}
              startIcon={<span aria-hidden="true">{section.icon}</span>}
            >
              {t(`home.${section.key}`)}
              {!section.href && <span className="soon">{t('home.comingSoon')}</span>}
            </GameButton>
          ))}
        </nav>
        <div className="secondary">
          <GameButton color="ghost" size="small" href="/account">
            {t('nav.myProfile')}
          </GameButton>
          <GameButton color="ghost" size="small" onClick={logout}>
            {t('nav.logout')}
          </GameButton>
        </div>
        {user && <p className="player">{user.displayName}</p>}
      </main>
      <p className="version">
        {versionLabel}
        {builtAt && <span className="built-at"> · {builtAt}</span>}
      </p>
    </div>
  )
}
