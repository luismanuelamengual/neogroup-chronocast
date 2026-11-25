import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { BoonKind, MatchState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** How much a side gets from its active boons of a kind (0: none). */
export function boonOf(state: MatchState, player: PlayerId, kind: BoonKind): number {
  return (state.players[player].boons ?? [])
    .filter((boon) => boon.kind === kind && boon.untilPhase >= state.phase)
    .reduce((total, boon) => total + boon.amount, 0)
}

/** What a card costs a player now, in Chronos: allies cost less with `allyDiscount` (never below 0). */
export function cardCost(state: MatchState, player: PlayerId, card: CardDefinition): number {
  return card.type === 'ally' ? Math.max(0, card.cost - boonOf(state, player, 'allyDiscount')) : card.cost
}

/** The extra attack of an ally hidden by a hero's ability (0 once it ended). */
export function veilAttack(state: MatchState, unit: Unit): number {
  return unit.veil && unit.veil.untilPhase >= state.phase ? unit.veil.attack : 0
}
