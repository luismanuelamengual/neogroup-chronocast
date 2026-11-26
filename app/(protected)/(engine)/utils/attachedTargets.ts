import { CardInstance, MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'

/** A card attached to a hero or an ally that a target can point to. */
export interface AttachedOption {
  /** The place, with the card's uid in `attached`. */
  ref: SlotRef
  card: CardInstance
  kind: 'weapon' | 'armor' | 'attachment' | 'artifact' | 'trap'
}

/**
 * The attached cards that fit a target kind (`enemyGear`, `enemyAttachment`)
 * for `player`: the rival hero's weapon and armor, and (for `enemyAttachment`)
 * the cards attached to its allies that aren't hidden by stealth; for
 * `enemyArtifact`, the rival's artifacts and face-down traps, and for
 * `friendlyArtifact` the player's own artifacts (aimed at through their
 * hero). Empty for the other kinds. The engine checks them again when the action resolves.
 */
export function attachedOptions(state: MatchState, player: PlayerId, kind: TargetKind): AttachedOption[] {
  if (kind === 'enemyArtifact' || kind === 'friendlyArtifact') {
    return supportOptions(state, player, kind)
  }

  if (kind !== 'enemyGear' && kind !== 'enemyAttachment') {
    return []
  }

  const enemy = opponentOf(player)
  const side = state.players[enemy]
  const options: AttachedOption[] = []

  if (side.hero.weapon) {
    const card = side.hero.weapon.card

    options.push({ ref: { player: enemy, slot: 'hero', attached: card.uid }, card, kind: 'weapon' })
  }

  if (side.hero.armor) {
    const card = side.hero.armor.card

    options.push({ ref: { player: enemy, slot: 'hero', attached: card.uid }, card, kind: 'armor' })
  }

  if (kind === 'enemyAttachment') {
    side.allies.forEach((unit, slot) => {
      if (!unit || unit.keywords.includes('stealth')) {
        return
      }

      for (const card of unit.attachments ?? []) {
        options.push({ ref: { player: enemy, slot, attached: card.uid }, card, kind: 'attachment' })
      }
    })
  }

  return options
}

/** The support cards a target kind of the support slots can aim at (through the hero of their side). */
function supportOptions(
  state: MatchState,
  player: PlayerId,
  kind: 'enemyArtifact' | 'friendlyArtifact'
): AttachedOption[] {
  const owner = kind === 'enemyArtifact' ? opponentOf(player) : player
  const side = state.players[owner]
  const options: AttachedOption[] = (side.artifacts ?? []).map((card) => ({
    ref: { player: owner, slot: 'hero', attached: card.uid },
    card,
    kind: 'artifact'
  }))

  if (kind === 'enemyArtifact') {
    for (const card of side.traps) {
      options.push({ ref: { player: owner, slot: 'hero', attached: card.uid }, card, kind: 'trap' })
    }
  }

  return options
}
