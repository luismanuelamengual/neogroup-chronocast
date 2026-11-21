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
  /** The deck every game mode plays with. */
  active: boolean
  updatedAt: string
}

/** The deck every game mode plays with, with whether it can be played right now. */
export interface ActiveDeck extends DeckDto {
  playable: boolean
}

/** What the deck editor sends to save a deck (`id` missing: a new deck). */
export interface DeckInput {
  id?: number
  name: string
  heroId: string
  cards: Record<string, number>
}
