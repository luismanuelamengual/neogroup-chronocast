import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactInPlay, destroyArtifactsById, healAllAllies } from '@/app/(protected)/(engine)/effects'

/** Its rival, the Eclipse Sigil: each one can destroy the other with its ability. */
const ECLIPSE_SIGIL_ID = 'eclipse-sigil'

export default defineCard({
  id: 'dawn-sigil',
  type: 'artifact',
  name: 'Dawn Sigil',
  text: 'At the start of each phase: your allies heal 4.',
  flavor: 'No night has ever won. This sigil makes sure of it.',
  faction: 'neutral',
  restriction: { kind: 'side', side: 'dawn' },
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
      'Dawn Sigil: a floating golden sun-disc seal engraved with clock numerals, radiating warm sunrise rays, centered and seen from slightly below, misty valley at first light in the background'
  }
})
