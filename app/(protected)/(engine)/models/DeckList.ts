/** A deck as the player builds it: its hero and the ids of the other cards (one entry per copy). */
export interface DeckList {
  heroId: string
  cards: string[]
  /** The back its cards show face down (data/cardBacks.ts; missing: the default one). */
  cardBack?: string
}
