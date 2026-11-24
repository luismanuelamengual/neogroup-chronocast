'use client'

import './index.scss'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import BattleEnd from '@/app/(protected)/(battle)/components/BattleEnd'
import BattleScreen from '@/app/(protected)/(battle)/components/BattleScreen'
import { QUICK_MATCH_AI_LEVEL } from '@/app/(protected)/(battle)/data/quickMatch'
import { useQuickMatch } from '@/app/(protected)/(battle)/hooks/useQuickMatch'
import { QuickMatchReward, QuickMatchTicket } from '@/app/(protected)/(battle)/models/QuickMatchDto'
import { ME, useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import { createPracticeMatch } from '@/app/(protected)/(battle)/utils/practice'
import ActiveDeckChip, { canPlayWith } from '@/app/(protected)/(collection)/components/ActiveDeckChip'
import { ActiveDeck } from '@/app/(protected)/(collection)/models/DeckDto'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

interface QuickMatchProps {
  /** The deck every mode plays with (null: the player has no decks). */
  deck: ActiveDeck | null
}

/**
 * Quick match (/quick-match): the active deck against the computer, which
 * plays a random hero with a random deck, different every match. The server
 * deals it (seed and decks) and, when it ends, replays it and pays its gold:
 * less than an online match and no Prestige (shop/data/gold.ts, QUICK_MATCH_GOLD).
 */
export default function QuickMatch({ deck: active }: QuickMatchProps) {
  const t = useT()
  const router = useRouter()
  const api = useQuickMatch()
  const mode = useBattleStore((store) => store.mode)
  const startLocal = useBattleStore((store) => store.startLocal)
  const leave = useBattleStore((store) => store.leave)
  const ready = canPlayWith(active)
  /** The match on screen, as the server dealt it. */
  const [ticket, setTicket] = useState<QuickMatchTicket | null>(null)
  const [dealing, setDealing] = useState(false)

  useMusic(mode !== 'idle' ? null : 'menu')

  /** Asks the server for a match (the same rival again with `rematchOf`) and starts it. */
  const deal = useCallback(
    async (rematchOf: number | null = null) => {
      setDealing(true)

      try {
        const dealt = await api.startMatch(rematchOf)

        setTicket(dealt)
        startLocal(createPracticeMatch(dealt.deck, dealt.rival, dealt.seed), dealt.deck, QUICK_MATCH_AI_LEVEL)
      } catch {
        // The error is already shown; the page offers to try again.
        leave()
      } finally {
        setDealing(false)
      }
    },
    [api, startLocal, leave]
  )

  useEffect(() => {
    if (ready) {
      void deal()
    }
    // Only when the page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Leaving the page stops the match.
  useEffect(() => () => leave(), [leave])

  if (ticket && mode !== 'idle') {
    return (
      <BattleScreen
        onChangeHeroes={() => router.push('/play')}
        renderEnd={(state, showLog) => (
          <QuickMatchEnd
            key={ticket.matchId}
            state={state}
            ticket={ticket}
            busy={dealing}
            onRematch={() => void deal(ticket.matchId)}
            onNewRival={() => void deal()}
            onShowLog={showLog}
          />
        )}
      />
    )
  }

  return (
    <div className="quick-match">
      <header>
        <h1>{t('battle.quick.title')}</h1>
        <p>{t('battle.quick.text')}</p>
      </header>
      <ActiveDeckChip deck={active} />
      {ready && (
        <GameButton color="gold" disabled={dealing} onClick={() => void deal()}>
          {dealing ? t('battle.quick.dealing') : t('battle.quick.play')}
        </GameButton>
      )}
      <GameButton color="ghost" href="/play">
        {t('battle.quick.back')}
      </GameButton>
    </div>
  )
}

interface QuickMatchEndProps {
  state: MatchState
  ticket: QuickMatchTicket
  /** A new match is being dealt. */
  busy: boolean
  onRematch: () => void
  onNewRival: () => void
  onShowLog: () => void
}

/** The end of a quick match: sends the record once, and shows the gold the server paid after replaying it. */
function QuickMatchEnd({ state, ticket, busy, onRematch, onNewRival, onShowLog }: QuickMatchEndProps) {
  const t = useT()
  const router = useRouter()
  const api = useQuickMatch()
  const record = useBattleStore((store) => store.record)
  const [reward, setReward] = useState<QuickMatchReward | null>(null)
  const [status, setStatus] = useState<'verifying' | 'idle' | 'failed'>('verifying')
  const sent = useRef(false)

  useEffect(() => {
    if (sent.current) {
      return
    }

    sent.current = true
    api
      .finishMatch(ticket.matchId, record)
      .then((result) => {
        setReward(result)
        setStatus('idle')
        // The gold shown around the app.
        router.refresh()
      })
      .catch(() => setStatus('failed'))
  }, [api, ticket, record, router])

  const note =
    status === 'verifying'
      ? `⏳ ${t('battle.quick.verifying')}`
      : status === 'failed'
        ? `⚠️ ${t('battle.quick.verifyFailed')}`
        : reward?.capped
          ? t('battle.quick.capped')
          : null

  return (
    <BattleEnd
      state={state}
      me={ME}
      reward={reward && !reward.capped ? reward : null}
      rewardNote={note}
      onRematch={() => !busy && onRematch()}
      onChangeHeroes={() => !busy && onNewRival()}
      changeLabel={t('battle.quick.newRival')}
      onShowLog={onShowLog}
    />
  )
}
