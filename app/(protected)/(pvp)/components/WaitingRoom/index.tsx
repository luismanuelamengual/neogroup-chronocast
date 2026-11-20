'use client'

import './index.scss'
import { useEffect, useState } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { MatchView } from '@/app/(protected)/(pvp)/models/MatchView'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useT } from '@/app/i18n/I18nProvider'

/**
 * The room while nobody joined: the code and link of a private room to share,
 * the time left before it closes (10 minutes), and leaving it.
 */
export default function WaitingRoom({ view, onCancel }: { view: MatchView; onCancel: () => void }) {
  const t = useT()
  const { showSuccessMessage } = useNotifications()
  const [deadline] = useState(() => Date.now() + view.deadlineIn)
  const [now, setNow] = useState(() => Date.now())
  const closed = view.status !== 'waiting'
  const link = view.code ? `${typeof window === 'undefined' ? '' : window.location.origin}/lobby?code=${view.code}` : ''
  const left = Math.max(0, Math.ceil((deadline - now) / 1000))

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)

    return () => clearInterval(timer)
  }, [])

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'ChronoCast', text: t('match.shareText', { code: view.code! }), url: link })
      } else {
        await navigator.clipboard.writeText(link)
        showSuccessMessage(t('match.copied'))
      }
    } catch {
      // The player closed the share sheet.
    }
  }

  return (
    <div className="waiting-room">
      <Backdrop />
      <div className="waiting-room__panel">
        <span className="waiting-room__hero">
          <CardView card={getCard(view.you.heroId)} />
        </span>
        <div className="waiting-room__info">
          {closed ? (
            <>
              <h1>{t('match.closed')}</h1>
              <p>{t('match.closedText')}</p>
            </>
          ) : (
            <>
              <h1>{t('match.waiting')}</h1>
              <p>{view.visibility === 'private' ? t('match.waitingPrivate') : t('match.waitingPublic')}</p>
              {view.code && (
                <div className="waiting-room__code">
                  <span>{t('match.code')}</span>
                  <strong>{view.code}</strong>
                  <GameButton size="small" color="cyan" onClick={share}>
                    🔗 {t('match.share')}
                  </GameButton>
                </div>
              )}
              <p className="waiting-room__timer">
                {t('match.closesIn', { time: `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}` })}
              </p>
            </>
          )}
          <div className="waiting-room__buttons">
            {!closed && (
              <GameButton color="ghost" onClick={onCancel}>
                {t('match.cancel')}
              </GameButton>
            )}
            <GameButton color={closed ? 'gold' : 'ghost'} href="/lobby">
              {t('match.backToLobby')}
            </GameButton>
          </div>
        </div>
      </div>
    </div>
  )
}
