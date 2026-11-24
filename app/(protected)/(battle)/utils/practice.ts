import '@/app/(protected)/(cards)/utils/catalog'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'

/**
 * A match against the computer: the player's deck against the starter deck of
 * the computer's hero (practice), or against a deck of its own (quick match).
 */
export function createPracticeMatch(deck: DeckList, rival: string | DeckList, seed: number): MatchState {
  return createMatch({ seed, decks: { a: deck, b: typeof rival === 'string' ? starterDeck(rival) : rival } }).state
}
