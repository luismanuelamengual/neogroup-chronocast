import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-stance',
  type: 'ability',
  name: 'Radiant Stance',
  text: 'Your hero gains 12 armor and draw a card.',
  flavor: 'Stand in the light and do not move.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['defense', 'draw'] },
  art: {
    subject:
      'Radiant Stance: a round shield and crossed spear planted firmly on stone, in a dark forest clearing, seen from above, crimson accents, mystic healer style'
  }
})
