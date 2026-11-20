/** A saved deck as the client sees it: the hero and the count of each other card. */
export interface DeckDto {
  id: number
  name: string
  heroId: string
  cards: Record<string, number>
  updatedAt: string
}

/** A deck in the list of decks. */
export interface DeckSummary {
  id: number
  name: string
  heroId: string
  /** Cards counting the hero. */
  size: number
  /** Whether it can be played (no broken rule and every card owned). */
  playable: boolean
  updatedAt: string
}

/** What the deck editor sends to save a deck (`id` missing: a new deck). */
export interface DeckInput {
  id?: number
  name: string
  heroId: string
  cards: Record<string, number>
}
