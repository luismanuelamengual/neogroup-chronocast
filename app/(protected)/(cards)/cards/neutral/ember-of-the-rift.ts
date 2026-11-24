import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ember-of-the-rift',
  type: 'ally',
  name: 'Ember of the Rift',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  element: 'fire',
  resist: ['fire'],
  weak: ['water'],
  price: 570,
  cost: 3,
  tribe: 'elemental',
  keywords: ['ranged'],
  attack: 4,
  health: 5,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Ember of the Rift: an elemental ember with a jagged crystal body made of pale turquoise rift light, roaring with jaws wide open, time rift wanderer style'
  }
})
