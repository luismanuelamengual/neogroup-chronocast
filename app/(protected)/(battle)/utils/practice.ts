import '@/app/(protected)/(cards)/utils/catalog'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'

/** A practice match against the computer: the player's deck against the starter deck of the computer's hero. */
export function createPracticeMatch(deck: DeckList, rivalHeroId: string, seed: number): MatchState {
  return createMatch({ seed, decks: { a: deck, b: starterDeck(rivalHeroId) } }).state
}
