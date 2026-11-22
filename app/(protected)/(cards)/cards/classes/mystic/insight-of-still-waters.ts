import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'insight-of-still-waters',
  type: 'ability',
  name: 'Insight of Still Waters',
  text: 'Draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'Insight of Still Waters: glowing cards and runes swirling out of an open book, mystic healer style'
  }
})
