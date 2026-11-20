'use client'

import { useCallback } from 'react'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { PackPurchase, Sale, ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import { useRequests } from '@/app/hooks/useRequests'

export function useShop() {
  const executeRequest = useRequests()
  const buyPack = useCallback(
    (packId: string) => executeRequest<PackPurchase>('/buyPack', { packId }),
    [executeRequest]
  )
  const unlockRarity = useCallback(
    (rarity: Rarity) => executeRequest<ShopState>('/unlockRarity', { rarity }),
    [executeRequest]
  )
  const buyCard = useCallback(
    (cardId: string, count = 1) => executeRequest<ShopState>('/buyCard', { cardId, count }),
    [executeRequest]
  )
  const sellCards = useCallback(
    (cards: Record<string, number>) => executeRequest<Sale>('/sellCards', { cards }),
    [executeRequest]
  )
  const quickSell = useCallback(() => executeRequest<Sale>('/quickSell', {}), [executeRequest])

  return { buyPack, unlockRarity, buyCard, sellCards, quickSell }
}
