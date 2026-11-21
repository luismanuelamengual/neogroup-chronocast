'use client'

import { useCallback } from 'react'
import { DeckDto, DeckInput } from '@/app/(protected)/(collection)/models/DeckDto'
import { useRequests } from '@/app/hooks/useRequests'

export function useCollection() {
  const executeRequest = useRequests()
  const chooseStarter = useCallback(
    (heroId: string) => executeRequest<{ deckId: number; cards: string[] }>('/chooseStarter', { heroId }),
    [executeRequest]
  )
  const saveDeck = useCallback((input: DeckInput) => executeRequest<DeckDto>('/saveDeck', input), [executeRequest])
  const deleteDeck = useCallback((id: number) => executeRequest<null>('/deleteDeck', { id }), [executeRequest])
  const setActiveDeck = useCallback((id: number) => executeRequest<null>('/setActiveDeck', { id }), [executeRequest])

  return { chooseStarter, saveDeck, deleteDeck, setActiveDeck }
}
