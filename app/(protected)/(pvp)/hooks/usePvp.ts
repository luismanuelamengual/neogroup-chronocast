'use client'

import { useCallback, useMemo } from 'react'
import { Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { MatchView, MatchVisibility, RoomSummary } from '@/app/(protected)/(pvp)/models/MatchView'
import { useRequests } from '@/app/hooks/useRequests'

export function usePvp() {
  const executeRequest = useRequests()
  const createRoom = useCallback(
    (visibility: MatchVisibility) => executeRequest<{ id: number; code: string | null }>('/createRoom', { visibility }),
    [executeRequest]
  )
  const listRooms = useCallback(() => executeRequest<RoomSummary[]>('/listRooms', {}, false), [executeRequest])
  const joinRoom = useCallback(
    (target: { matchId?: number; code?: string }) => executeRequest<{ id: number }>('/joinRoom', target),
    [executeRequest]
  )
  const quickMatch = useCallback(
    () => executeRequest<{ id: number; joined: boolean }>('/quickMatch', {}),
    [executeRequest]
  )
  const getMatchState = useCallback(
    (matchId: number, version: number | null) =>
      executeRequest<MatchView | null>('/getMatchState', { matchId, version }, false),
    [executeRequest]
  )
  const submitMulligan = useCallback(
    (matchId: number, cardUids: number[]) => executeRequest<MatchView>('/submitMulligan', { matchId, cardUids }),
    [executeRequest]
  )
  const submitPlan = useCallback(
    (matchId: number, phase: number, timeline: Timeline) =>
      executeRequest<MatchView>('/submitPlan', { matchId, phase, timeline }),
    [executeRequest]
  )
  const forfeitMatch = useCallback(
    (matchId: number) => executeRequest<MatchView>('/forfeitMatch', { matchId }),
    [executeRequest]
  )

  return useMemo(
    () => ({ createRoom, listRooms, joinRoom, quickMatch, getMatchState, submitMulligan, submitPlan, forfeitMatch }),
    [createRoom, listRooms, joinRoom, quickMatch, getMatchState, submitMulligan, submitPlan, forfeitMatch]
  )
}
