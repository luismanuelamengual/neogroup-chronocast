import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'study-of-dawn',
  type: 'ability',
  name: 'Study of Dawn',
  text: 'Draw a card and your hero heals 3.',
  flavor: 'Learn from the light before it rises.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Study of Dawn: an open book with glowing pages flipping by themselves, over a desert of red dunes, close-up filling the frame, emerald accents, time rift wanderer style'
  }
})
