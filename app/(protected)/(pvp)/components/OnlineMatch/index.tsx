'use client'

import '@/app/(protected)/(cards)/utils/catalog'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import BattleScreen from '@/app/(protected)/(battle)/components/BattleScreen'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import { usePvp } from '@/app/(protected)/(pvp)/hooks/usePvp'
import { MatchView } from '@/app/(protected)/(pvp)/models/MatchView'
import { pollingChannel } from '@/app/(protected)/(pvp)/utils/matchChannel'

/**
 * A PvP match on screen: the battle screen in online mode (a room still
 * waiting for a rival goes back to the matchmaking). The server is the authority (docs/PLAN.md, section
 * 12.2): this screen sends the mulligan and the timelines, and learns about
 * the rest through the match channel.
 */
export default function OnlineMatch({ initial }: { initial: MatchView }) {
  const router = useRouter()
  const pvp = usePvp()
  const [waiting, setWaiting] = useState<MatchView | null>(
    initial.status === 'playing' || initial.state ? null : initial
  )
  const waitingRef = useRef(waiting)
  const startOnline = useBattleStore((store) => store.startOnline)
  const applyView = useBattleStore((store) => store.applyView)
  const leave = useBattleStore((store) => store.leave)

  waitingRef.current = waiting

  useEffect(() => {
    const matchId = initial.id
    const online = {
      matchId,
      submitMulligan: (cardUids: number[]) => pvp.submitMulligan(matchId, cardUids),
      submitPlan: (phase: number, timeline: Parameters<typeof pvp.submitPlan>[2]) =>
        pvp.submitPlan(matchId, phase, timeline),
      forfeit: () => pvp.forfeitMatch(matchId)
    }

    const show = (view: MatchView) => {
      if (view.state) {
        if (waitingRef.current || !useBattleStore.getState().online) {
          setWaiting(null)
          startOnline(view, online)
        } else {
          applyView(view)
        }
      } else {
        setWaiting(view)
      }
    }

    show(initial)

    const stop = pollingChannel(
      (version) => pvp.getMatchState(matchId, version),
      () => (waitingRef.current ? waitingRef.current.version : useBattleStore.getState().version)
    ).subscribe(show)

    return () => {
      stop()
      leave()
    }
    // One channel per match page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial.id])

  useEffect(() => {
    if (waiting) {
      router.replace(waiting.status === 'waiting' ? '/online' : '/play')
    }
  }, [waiting, router])

  if (waiting) {
    return null
  }

  return <BattleScreen onChangeHeroes={() => router.push('/play')} />
}
