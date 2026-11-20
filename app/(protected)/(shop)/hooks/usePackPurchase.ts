'use client'

import { useState } from 'react'
import type { OpenedPack } from '@/app/(protected)/(shop)/components/PackOpening'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'

/** Opens a pack: buys it on the server and hands the cards to the opening animation. */
export function usePackPurchase(onChange: (state: ShopState) => void, onOpened: (pack: OpenedPack) => void) {
  const { buyPack } = useShop()
  const [buying, setBuying] = useState<string | null>(null)

  const buy = async (packId: string, before: ShopState['collection']) => {
    setBuying(packId)

    try {
      const result = await buyPack(packId)

      onChange(result.state)
      onOpened({ key: Date.now(), packId, cards: result.cards, guaranteed: result.guaranteed, before })
    } catch {
      // The error is already shown as a toast.
    } finally {
      setBuying(null)
    }
  }

  return { buy, buying }
}
