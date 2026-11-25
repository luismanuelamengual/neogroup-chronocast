import { CardInstance, MatchState, PlayerState } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { getCard, HIDDEN_CARD_ID } from '@/app/(protected)/(engine)/utils/registry'
import { ResolutionFrame } from '@/app/(protected)/(engine)/utils/resolvePhase'

/** The id that replaces a card the viewer can't see. */
export const HIDDEN_CARD = HIDDEN_CARD_ID

const hide = (cards: CardInstance[]): CardInstance[] => cards.map((card) => ({ uid: card.uid, cardId: HIDDEN_CARD }))

/**
 * The viewer's own deck: hidden, except its artifacts (an ability lets the player choose one), which go
 * to the bottom sorted by id, so neither their place nor the order of the rest is told.
 */
function ownDeck(cards: CardInstance[]): CardInstance[] {
  const artifacts = cards
    .filter((card) => getCard(card.cardId).type === 'artifact')
    .map((card) => card.cardId)
    .sort()
  const hidden = cards.length - artifacts.length

  return [
    ...artifacts.map((cardId, index) => ({ uid: -(index + 1), cardId })),
    ...Array.from({ length: hidden }, (_, index) => ({ uid: -(artifacts.length + index + 1), cardId: HIDDEN_CARD }))
  ]
}

/**
 * The state as a player may see it (docs/PLAN.md, section 12.2): the rival's
 * hand and face-down traps hidden, both decks hidden but the viewer's artifacts (their order is the next
 * draws) and no random generator (it would tell the next shuffles).
 */
export function redactState(state: MatchState, viewer: PlayerId): MatchState {
  const rival = opponentOf(viewer)
  const own: PlayerState = { ...state.players[viewer], deck: ownDeck(state.players[viewer].deck) }
  const other: PlayerState = {
    ...state.players[rival],
    hand: hide(state.players[rival].hand),
    deck: hide(state.players[rival].deck),
    traps: hide(state.players[rival].traps)
  }

  return { ...state, seed: 0, rng: 0, players: { [viewer]: own, [rival]: other } as MatchState['players'] }
}

export function redactFrames(frames: ResolutionFrame[], viewer: PlayerId): ResolutionFrame[] {
  return frames.map((frame) => ({ ...frame, state: redactState(frame.state, viewer) }))
}
