import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-the-first-fire',
  type: 'ability',
  name: 'Aegis of the First Fire',
  text: 'Your hero gains 12 armor and draw a card.',
  flavor: 'The first fire still protects its children.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['defense', 'draw'] },
  art: {
    subject:
      'Aegis of the First Fire: a radiant dome-shaped magical barrier, in a dark forest clearing, diagonal dynamic composition, indigo accents, prehistoric jungle era style'
  }
})
