import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scepter-of-flame',
  type: 'weapon',
  name: 'Scepter of Flame',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'fire',
  price: 140,
  cost: 1,
  keywords: ['ranged'],
  attack: 1,
  durability: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1 },
  art: {
    subject: 'Scepter of Flame: a single scepter weapon floating in dramatic light, mage style'
  }
})
