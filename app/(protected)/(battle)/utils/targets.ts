import { ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { ActiveAbility, CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { MatchState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { attachedOptions } from '@/app/(protected)/(engine)/utils/attachedTargets'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

const SLOTS = Array.from({ length: ALLY_SLOTS }, (_, slot) => slot)

function hidden(unit: Unit | null): boolean {
  return !!unit && unit.keywords.includes('stealth')
}

/** The same place of the board (whatever attached card each one points to). */
export function sameRef(a: SlotRef, b: SlotRef): boolean {
  return a.player === b.player && a.slot === b.slot
}

/**
 * The slots that fit a target kind of a card (the engine checks them again
 * when the action resolves). For the kinds that aim at an attached card there
 * is one ref per card (with its `attached`), so a slot can show up more than once.
 */
export function refsFor(state: MatchState, player: PlayerId, kind: TargetKind): SlotRef[] {
  const enemy = opponentOf(player)
  const enemyAllies = state.players[enemy].allies
  const ownAllies = state.players[player].allies

  switch (kind) {
    case 'enemySlot':
      return [
        { player: enemy, slot: 'hero' },
        ...SLOTS.filter((slot) => !hidden(enemyAllies[slot])).map((slot) => ({ player: enemy, slot }))
      ]
    case 'enemyAlly':
      return SLOTS.filter((slot) => enemyAllies[slot] && !hidden(enemyAllies[slot])).map((slot) => ({
        player: enemy,
        slot
      }))
    case 'friendlyAlly':
      return SLOTS.filter((slot) => ownAllies[slot]).map((slot) => ({ player, slot }))
    case 'friendlySlot':
      return SLOTS.map((slot) => ({ player, slot }))
    case 'enemyGear':
    case 'enemyAttachment':
    case 'enemyArtifact':
    case 'friendlyArtifact':
      return attachedOptions(state, player, kind).map((option) => option.ref)
  }
}

/** Where an attack can be aimed: the enemy hero or any enemy slot (an empty one too: its ally may move there). */
export function attackRefs(state: MatchState, player: PlayerId): SlotRef[] {
  return refsFor(state, player, 'enemySlot')
}

/** Where an ally can move: an empty slot, or the slot of a neighbor (of anyone with `agile`) to swap places. */
export function moveRefs(state: MatchState, player: PlayerId, uid: number): SlotRef[] {
  const allies = state.players[player].allies
  const from = allies.findIndex((unit) => unit?.uid === uid)

  if (from < 0) {
    return []
  }

  const agile = allies[from]!.keywords.includes('agile')

  return SLOTS.filter((slot) => slot !== from && (!allies[slot] || agile || Math.abs(slot - from) === 1)).map(
    (slot) => ({ player, slot })
  )
}

/** The free slots where an ally card can be summoned. */
export function summonRefs(state: MatchState, player: PlayerId): SlotRef[] {
  return SLOTS.filter((slot) => !state.players[player].allies[slot]).map((slot) => ({ player, slot }))
}

/** What a card needs to be programmed: a slot (allies), targets (some abilities and items) or nothing. */
export function cardNeeds(card: CardDefinition): 'slot' | 'targets' | 'nothing' {
  if (card.type === 'ally') {
    return 'slot'
  }

  return (card.targets?.length ?? 0) > 0 ? 'targets' : 'nothing'
}

/** The definition of the hero of a side. */
export function heroCard(state: MatchState, player: PlayerId): CardDefinition {
  return getCard(state.players[player].hero.cardId)
}

/** The ability of one of the player's artifacts in play, if it has one. */
export function artifactAbility(state: MatchState, player: PlayerId, uid: number): ActiveAbility | undefined {
  const artifact = (state.players[player].artifacts ?? []).find((candidate) => candidate.uid === uid)

  return artifact ? getCard(artifact.cardId).ability : undefined
}

/** The ability of one of the player's allies on the board, if it has one. */
export function allyAbility(state: MatchState, player: PlayerId, uid: number): ActiveAbility | undefined {
  const unit = state.players[player].allies.find((candidate) => candidate?.uid === uid)

  return unit ? getCard(unit.cardId).ability : undefined
}
