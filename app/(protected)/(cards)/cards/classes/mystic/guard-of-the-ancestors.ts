import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'guard-of-the-ancestors',
  type: 'ability',
  name: 'Guard of the Ancestors',
  text: 'Your hero gains 13 armor and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'exotic',
  price: 11600,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 13)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['defense', 'draw'] },
  art: {
    subject: 'Guard of the Ancestors: a huge shimmering shield of force, mystic healer style'
  }
})
