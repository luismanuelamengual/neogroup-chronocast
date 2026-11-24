import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'orb-of-flame',
  type: 'weapon',
  name: 'Orb of Flame',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'fire',
  price: 170,
  cost: 3,
  keywords: ['ranged'],
  attack: 3,
  durability: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Orb of Flame: a single orb made of polished bronze with engraved spirals, wreathed in roaring flames, resting on a velvet cloth, bursting toward the viewer, teal accents, mage style'
  }
})
