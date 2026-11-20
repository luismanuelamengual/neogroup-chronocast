import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { CARDS_ES } from '@/app/i18n/cards/es'
import { Locale } from '@/app/i18n/config'

/** The translation of a card's texts (any of them can be left out: it shows in English). */
export interface CardTranslation {
  name?: string
  text?: string
  flavor?: string
  ability?: { name?: string; text?: string }
}

/** Card translations by locale (docs/PLAN.md, section 7.6). English is the cards' own text. */
export const CARD_TRANSLATIONS: Partial<Record<Locale, Record<string, CardTranslation>>> = { es: CARDS_ES }

/** A card with its texts in a language (those without a translation stay in English). */
export function translateCard(card: CardDefinition, locale: Locale): CardDefinition {
  const translation = CARD_TRANSLATIONS[locale]?.[card.id]

  if (!translation) {
    return card
  }

  return {
    ...card,
    name: translation.name ?? card.name,
    text: translation.text ?? card.text,
    flavor: translation.flavor ?? card.flavor,
    ability: card.ability && {
      ...card.ability,
      name: translation.ability?.name ?? card.ability.name,
      text: translation.ability?.text ?? card.ability.text
    }
  }
}

/** A card's name in a language. */
export function cardName(card: CardDefinition, locale: Locale): string {
  return CARD_TRANSLATIONS[locale]?.[card.id]?.name ?? card.name
}
