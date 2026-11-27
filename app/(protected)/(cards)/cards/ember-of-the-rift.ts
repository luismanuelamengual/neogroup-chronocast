import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ember-of-the-rift',
  type: 'ally',
  name: 'Ember of the Rift',
  text: 'When it enters: burn the enemy hero (3).',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  element: 'fire',
  resist: ['fire'],
  weak: ['water'],
  price: 420,
  cost: 3,
  tribe: 'elemental',
  keywords: ['ranged'],
  attack: 4,
  health: 5,
  onEnter(ctx) {
    burn(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Ember of the Rift: an elemental ember with a jagged crystal body made of pale turquoise rift light, roaring with jaws wide open, time rift wanderer style'
  }
})
