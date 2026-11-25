import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-cave-painter',
  type: 'ally',
  name: 'Scarred Cave Painter',
  text: 'When it enters: your other Caveborn gain +1 attack and +1 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  resist: ['ice'],
  price: 570,
  cost: 3,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 5,
  health: 6,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'caveborn', 1, 1, true)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Scarred Cave Painter: a stocky elderly neanderthal man with sun-weathered bronze skin, a shaved head, a braided beard and a dusting of freckles, wearing feathers tied in the hair, dressed in a hide tunic with antler toggles, painting glowing handprints on rock, with a haunted stare, rose pink accents, prehistoric jungle era style'
  }
})
