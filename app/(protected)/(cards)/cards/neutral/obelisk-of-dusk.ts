import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactInPlay, destroyArtifactsById, healAllAllies } from '@/app/(protected)/(engine)/effects'

/**
 * Dawn Sigil (the id comes from the card it replaced, so collections keep it).
 * Its rival is the Eclipse Sigil (id `brazier-of-the-ancestors`): each one can
 * destroy the other with its ability.
 */
const ECLIPSE_SIGIL_ID = 'brazier-of-the-ancestors'

export default defineCard({
  id: 'obelisk-of-dusk',
  type: 'artifact',
  name: 'Dawn Sigil',
  text: 'At the start of each phase: your allies heal 4.',
  flavor: 'No night has ever won. This sigil makes sure of it.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 75,
  cost: 3,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
  },
  ability: {
    name: 'Break the Eclipse',
    text: 'Destroy every Eclipse Sigil in play.',
    cost: 0,
    ai: { tags: ['antiGear'] },
    canActivate: (ctx) => (artifactInPlay(ctx, ECLIPSE_SIGIL_ID) ? null : 'nothingToDestroy'),
    activate(ctx) {
      destroyArtifactsById(ctx, ECLIPSE_SIGIL_ID)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Dawn Sigil: a floating golden sun-disc sigil engraved with clock numerals, radiating warm sunrise rays over a misty valley at first light, centered and seen from slightly below, white and gold accents, time rift wanderer style'
  }
})
