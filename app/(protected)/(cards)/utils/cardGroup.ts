import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'

/** The group of a card in the dev catalog and the art catalog: who can use it. */
export type CardGroupKind = 'hero' | 'neutral' | 'side' | 'faction'

export interface CardGroup {
  kind: CardGroupKind
  /** The hero, side or faction (empty for the neutral cards). */
  name: string
}

/**
 * The group of a card, from its metadata (its `restriction`), never from its
 * file: every card lives at the same level of cards/ (docs/PLAN.md, section
 * 7.1). A hero goes with its signature cards. A card with several criteria
 * goes in the group of the first one, in this order: hero, faction and
 * side; several values of one criterion are joined with `+`.
 */
export function cardGroup(card: CardDefinition): CardGroup {
  const { heroes, factions, sides } = card.restriction
  const groups: [CardGroupKind, string[] | undefined][] = [
    ['hero', heroes],
    ['faction', factions],
    ['side', sides]
  ]
  const [kind, names] = groups.find(([, values]) => values?.length) ?? ['neutral', []]

  return { kind, name: (names ?? []).join('+') }
}
