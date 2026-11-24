import { MAX_HAND } from '@/app/(protected)/(engine)/data/rules'
import { Afflictions, MatchState, PlayerState } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

const WIN = 100000

/** Health a hero or an ally is still going to lose to its poison and burn. */
function pendingLoss(subject: Afflictions): number {
  const poison = subject.poison ?? 0

  return (poison * (poison + 1)) / 2 + (subject.burn ?? 0) * (subject.burnPhases ?? 0)
}

/** What a side has: its hero's life, its board, its hand, its Chronos and energy. */
function material(side: PlayerState): number {
  const armor = side.hero.armor ? side.hero.armor.reduction * Math.min(side.hero.armor.durability, 4) * 0.6 : 0
  const hero = side.hero.health + armor - pendingLoss(side.hero)
  const weapon = side.hero.weapon ? side.hero.weapon.attack * Math.min(side.hero.weapon.durability, 3) * 0.4 : 0
  const board = side.allies.reduce(
    (sum, unit) =>
      sum +
      (unit
        ? unit.attack * 0.7 + Math.max(0, unit.health - pendingLoss(unit)) * 0.35 + (unit.keywords.length > 0 ? 2 : 0)
        : 0),
    0
  )
  const hand = Math.min(side.hand.length, MAX_HAND) * 3
  const chronos = Math.min(side.chronosCapacity, 8) * 4 + (side.energy ?? 0) * 1.5
  const extras = (side.location ? 6 : 0) + side.traps.length * 4 + (side.artifacts ?? []).length * 5

  return hero + weapon + board + hand + chronos + extras
}

/**
 * How good a state is for a player (docs/PLAN.md, section 13.3): a win is the
 * best (the sooner the better), a loss the worst; otherwise what it has minus
 * what the rival has, the rival's hero life weighing a bit more (to finish).
 */
export function evaluate(state: MatchState, player: PlayerId): number {
  const rival = opponentOf(player)

  if (state.status === 'finished') {
    const winner = state.result?.winner

    if (winner === player) {
      return WIN - state.phase
    }

    return winner == null ? -WIN / 4 : -WIN + state.phase
  }

  const mine = state.players[player]
  const theirs = state.players[rival]

  return material(mine) - material(theirs) - theirs.hero.health * 0.3
}
