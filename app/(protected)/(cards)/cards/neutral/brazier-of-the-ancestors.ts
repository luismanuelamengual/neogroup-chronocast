import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import {
  anyAllyInPlay,
  artifactInPlay,
  damageAllAllies,
  destroyArtifactsById,
  destroySelfArtifact
} from '@/app/(protected)/(engine)/effects'
import { PLAYER_IDS } from '@/app/(protected)/(engine)/models/PlayerId'

/**
 * Eclipse Sigil (the id comes from the card it replaced, so collections keep
 * it). Its rival is the Dawn Sigil (id `obelisk-of-dusk`): each one can destroy
 * the other with its ability.
 */
const DAWN_SIGIL_ID = 'obelisk-of-dusk'

export default defineCard({
  id: 'brazier-of-the-ancestors',
  type: 'artifact',
  name: 'Eclipse Sigil',
  text: 'At the start of each phase: deal 2 shadow damage to every ally, yours too. If there are no allies, it is destroyed.',
  flavor: 'For a moment, no hour belongs to anyone.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 75,
  cost: 3,
  element: 'shadow',
  onPhaseStart(ctx) {
    if (!anyAllyInPlay(ctx)) {
      destroySelfArtifact(ctx)

      return
    }

    for (const player of PLAYER_IDS) {
      damageAllAllies(ctx, player, 2)
    }
  },
  ability: {
    name: 'Swallow the Dawn',
    text: 'Destroy every Dawn Sigil in play.',
    cost: 0,
    ai: { tags: ['antiGear'] },
    canActivate: (ctx) => (artifactInPlay(ctx, DAWN_SIGIL_ID) ? null : 'nothingToDestroy'),
    activate(ctx) {
      destroyArtifactsById(ctx, DAWN_SIGIL_ID)
    }
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Eclipse Sigil: a floating black sigil shaped like an eclipsed sun with a burning violet corona and broken clock hands, casting cold shadows over a dark valley, centered and seen from slightly below, violet accents, time rift wanderer style'
  }
})
