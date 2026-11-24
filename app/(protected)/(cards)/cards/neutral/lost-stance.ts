import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lost-stance',
  type: 'ability',
  name: 'Lost Stance',
  text: 'Your hero gains 13 armor and draw a card.',
  flavor: 'Out of time, never out of balance.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 4800,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 13)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['defense', 'draw'] },
  art: {
    subject:
      'Lost Stance: a round shield and crossed spear planted firmly on stone, over a desert of red dunes, dramatic backlight, violet accents, time rift wanderer style'
  }
})
