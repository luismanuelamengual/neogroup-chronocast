'use client'

import { useCallback, useMemo } from 'react'
import { BattleReward, BattleTicket } from '@/app/(protected)/(campaign)/models/CampaignDto'
import type { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { useRequests } from '@/app/hooks/useRequests'

export function useCampaign() {
  const executeRequest = useRequests()
  const startBattle = useCallback(
    (heroId: string, stage: number, deckId: number) =>
      executeRequest<BattleTicket>('/startCampaignBattle', { heroId, stage, deckId }),
    [executeRequest]
  )
  const finishBattle = useCallback(
    (ticket: string, record: BattleRecord) => executeRequest<BattleReward>('/finishCampaignBattle', { ticket, record }),
    [executeRequest]
  )

  return useMemo(() => ({ startBattle, finishBattle }), [startBattle, finishBattle])
}
