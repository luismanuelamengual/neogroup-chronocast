import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-balm',
  type: 'ability',
  name: 'Gentle Balm',
  text: 'Your hero heals 16 and draw a card.',
  flavor: 'For scraped knees and broken hearts.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'epic',
  price: 1880,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 16)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Gentle Balm: a small jar of glowing healing balm, over burning grassland, diagonal dynamic composition, ivory accents, mystic healer style'
  }
})
