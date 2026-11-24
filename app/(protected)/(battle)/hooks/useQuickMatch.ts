'use client'

import { useCallback, useMemo } from 'react'
import { QuickMatchReward, QuickMatchTicket } from '@/app/(protected)/(battle)/models/QuickMatchDto'
import type { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { useRequests } from '@/app/hooks/useRequests'

export function useQuickMatch() {
  const executeRequest = useRequests()
  const startMatch = useCallback(
    (rematchOf: number | null = null) => executeRequest<QuickMatchTicket>('/startQuickMatch', { rematchOf }),
    [executeRequest]
  )
  const finishMatch = useCallback(
    (matchId: number, record: BattleRecord) =>
      executeRequest<QuickMatchReward>('/finishQuickMatch', { matchId, record }, false),
    [executeRequest]
  )

  return useMemo(() => ({ startMatch, finishMatch }), [startMatch, finishMatch])
}
