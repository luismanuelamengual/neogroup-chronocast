import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glitched-plan',
  type: 'ability',
  name: 'Glitched Plan',
  text: 'Draw a card and your hero heals 3.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject: 'Glitched Plan: glowing cards and runes swirling out of an open book, neon cyberpunk future style'
  }
})
