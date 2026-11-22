import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-stance',
  type: 'ability',
  name: 'Flickering Stance',
  text: 'Your hero gains 15 armor and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 15)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['defense', 'draw'] },
  art: {
    subject: 'Flickering Stance: a huge shimmering shield of force, mage style'
  }
})
