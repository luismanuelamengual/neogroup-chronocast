'use client'

import { useCallback, useMemo } from 'react'
import { Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { MatchView, SearchStatus } from '@/app/(protected)/(pvp)/models/MatchView'
import { useRequests } from '@/app/hooks/useRequests'

export function usePvp() {
  const executeRequest = useRequests()
  const searchMatch = useCallback(
    (notifyError = true) => executeRequest<SearchStatus>('/searchMatch', {}, notifyError),
    [executeRequest]
  )
  const cancelSearch = useCallback(() => executeRequest<SearchStatus>('/cancelSearch', {}, false), [executeRequest])
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
    () => ({ searchMatch, cancelSearch, getMatchState, submitMulligan, submitPlan, forfeitMatch }),
    [searchMatch, cancelSearch, getMatchState, submitMulligan, submitPlan, forfeitMatch]
  )
}
