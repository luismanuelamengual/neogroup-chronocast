'use client'

import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { cardName } from '@/app/i18n/cards'
import { useI18n } from '@/app/i18n/I18nProvider'

/** A function that gives a card's name (a definition or an id) in the player's language. */
export function useCardName(): (card: CardDefinition | string) => string {
  const { locale } = useI18n()

  return (card) => cardName(typeof card === 'string' ? getCard(card) : card, locale)
}
