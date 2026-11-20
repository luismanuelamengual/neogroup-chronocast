import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silk-robe',
  type: 'armor',
  name: 'Silk Robe',
  text: 'On play: draw a card.',
  flavor: 'Pockets for every scroll.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 45,
  cost: 1,
  armor: 6,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'an elegant violet silk mage robe embroidered with silver stars on a mannequin'
  }
})
