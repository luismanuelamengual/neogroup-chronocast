import './layout.scss'
import Link from 'next/link'
import { ReactNode } from 'react'
import Backdrop from '@/app/components/Backdrop'
import GamePanel from '@/app/components/GamePanel'
import Logo from '@/app/components/Logo'
import { getT } from '@/app/i18n/server'

/**
 * Shared layout for every non authenticated page: clockwork watermark behind and,
 * in the middle, the logo over a small white panel.
 */
export default async function Layout({ children }: { children: ReactNode }) {
  const t = await getT()

  return (
    <div className="auth-layout">
      <Backdrop />
      <div className="column">
        <Link href="/" className="brand">
          <Logo size="medium" />
        </Link>
        <p className="tagline">{t('home.tagline')}</p>
        <GamePanel className="card">{children}</GamePanel>
      </div>
    </div>
  )
}
