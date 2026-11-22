import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'study-of-dawn',
  type: 'ability',
  name: 'Study of Dawn',
  text: 'Draw a card and your hero heals 3.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject: 'Study of Dawn: glowing cards and runes swirling out of an open book, time rift wanderer style'
  }
})
