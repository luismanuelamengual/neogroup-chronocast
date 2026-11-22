import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'guard-of-the-warlord',
  type: 'ability',
  name: 'Guard of the Warlord',
  text: 'Your hero gains 12 armor and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['defense', 'draw'] },
  art: {
    subject: 'Guard of the Warlord: a huge shimmering shield of force, warrior style'
  }
})
