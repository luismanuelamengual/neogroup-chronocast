'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import ActiveDeckChip, { canPlayWith } from '@/app/(protected)/(collection)/components/ActiveDeckChip'
import { ActiveDeck } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { leagueOf } from '@/app/(protected)/(pvp)/data/leagues'
import { PRESTIGE_WINDOW, SEARCH_POLL_MS, SEARCH_TIMEOUT_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { usePvp } from '@/app/(protected)/(pvp)/hooks/usePvp'
import { SearchStatus } from '@/app/(protected)/(pvp)/models/MatchView'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useI18n } from '@/app/i18n/I18nProvider'

interface MatchmakingProps {
  /** The deck it plays with (null: the player has no decks). */
  deck: ActiveDeck | null
  rating: number
}

/**
 * The online match: as soon as it opens it searches for a rival of similar
 * Prestige (the window widens while it waits), shows "Searching for a rival"
 * with the time left, and goes to the match when one is found. Without a rival
 * in time, or when the player cancels, it goes back to the Play menu.
 */
export default function Matchmaking({ deck, rating }: MatchmakingProps) {
  useMusic('menu')
  const { t, locale } = useI18n()
  const router = useRouter()
  const pvp = usePvp()
  const { showWarningMessage } = useNotifications()
  const playable = canPlayWith(deck)
  const [deadline, setDeadline] = useState(() => Date.now() + SEARCH_TIMEOUT_MS)
  const [now, setNow] = useState(() => Date.now())
  const [range, setRange] = useState<number>(PRESTIGE_WINDOW.start)
  const [leaving, setLeaving] = useState(false)
  const done = useRef(false)
  const league = leagueOf(rating)
  const left = Math.max(0, Math.ceil((deadline - now) / 1000))

  useEffect(() => {
    if (!playable) {
      return
    }

    done.current = false

    let busy = false
    let first = true

    const finish = (status: SearchStatus, timedOut: boolean) => {
      if (done.current) {
        return
      }

      done.current = true

      if (status.status === 'found') {
        router.replace(`/match/${status.id}`)
      } else {
        if (timedOut) {
          showWarningMessage(t('matchmaking.notFound'))
        }

        router.replace('/play')
      }
    }

    const giveUp = () =>
      pvp.cancelSearch().then(
        (status) => finish(status, true),
        () => finish({ status: 'timeout' }, true)
      )

    const poll = async () => {
      if (busy || done.current) {
        return
      }

      busy = true

      try {
        const status = await pvp.searchMatch(first)

        if (status.status === 'searching') {
          if (first) {
            setDeadline(Date.now() + status.expiresIn)
          }

          setRange(status.window)

          if (status.expiresIn <= 0) {
            await giveUp()
          }
        } else {
          finish(status, true)
        }
      } catch {
        // The first error (no playable deck, offline...) is shown as a toast: back to Play.
        if (first) {
          finish({ status: 'timeout' }, false)
        }
      } finally {
        first = false
        busy = false
      }
    }

    const timer = setInterval(() => {
      setNow(Date.now())
      void poll()
    }, SEARCH_POLL_MS)
    const tick = setInterval(() => setNow(Date.now()), 1000)

    // Closing the tab or leaving the app: stop searching, so nobody is paired with an empty seat.
    const onHide = () => {
      if (!done.current) {
        navigator.sendBeacon?.('/api/cancelSearch', new Blob(['{}'], { type: 'application/json' }))
      }
    }

    void poll()
    globalThis.addEventListener('pagehide', onHide)

    return () => {
      clearInterval(timer)
      clearInterval(tick)
      globalThis.removeEventListener('pagehide', onHide)

      if (!done.current) {
        done.current = true
        void pvp.cancelSearch().catch(() => undefined)
      }
    }
    // One search per visit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playable])

  useEffect(() => {
    if (playable && !done.current && now >= deadline + 1000) {
      done.current = true
      void pvp.cancelSearch().then(
        (status) => {
          if (status.status === 'found') {
            router.replace(`/match/${status.id}`)
          } else {
            showWarningMessage(t('matchmaking.notFound'))
            router.replace('/play')
          }
        },
        () => router.replace('/play')
      )
    }
  }, [now, deadline, playable, pvp, router, showWarningMessage, t])

  const cancel = async () => {
    setLeaving(true)
    done.current = true

    try {
      const status = await pvp.cancelSearch()

      router.replace(status.status === 'found' ? `/match/${status.id}` : '/play')
    } catch {
      router.replace('/play')
    }
  }

  const progress = Math.min(1, Math.max(0, 1 - (deadline - now) / SEARCH_TIMEOUT_MS))
  const format = (value: number) => Math.max(0, value).toLocaleString(locale)

  return (
    <div className="matchmaking">
      <Backdrop />
      <div className="matchmaking__panel">
        {deck && (
          <span className="matchmaking__hero">
            <span className="matchmaking__pulse" aria-hidden />
            <span className="matchmaking__pulse late" aria-hidden />
            <CardView card={getCard(deck.heroId)} />
          </span>
        )}
        <div className="matchmaking__info">
          {playable ? (
            <>
              <h1>{t('matchmaking.searching')}</h1>
              <span className={`matchmaking__league league-${league}`}>
                ⭐ {format(rating)} · {t(`leagues.${league}`)}
              </span>
              <p>
                {t('matchmaking.range', {
                  min: format(rating - range),
                  max: (rating + range).toLocaleString(locale)
                })}
              </p>
              <div className="matchmaking__bar" aria-hidden>
                <span style={{ width: `${progress * 100}%` }} />
              </div>
              <p className="matchmaking__timer">
                {t('matchmaking.closesIn', { time: `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}` })}
              </p>
              <GameButton color="secondary" loading={leaving} onClick={cancel}>
                {t('matchmaking.cancel')}
              </GameButton>
            </>
          ) : (
            <>
              <h1>{t('lobby.title')}</h1>
              <ActiveDeckChip deck={deck} />
              <GameButton color="secondary" href="/play">
                ← {t('lobby.back')}
              </GameButton>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
