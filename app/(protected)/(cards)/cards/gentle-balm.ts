import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-balm',
  type: 'ability',
  subtype: 'instinct',
  name: 'Gentle Balm',
  text: 'Your hero heals 16 and your allies gain +2 health.',
  flavor: 'For scraped knees and broken hearts.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 16)
    buffAllies(ctx, ctx.owner, 0, 2)
  },
  ai: { value: 5, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Gentle Balm: a small jar of glowing healing balm, over burning grassland, diagonal dynamic composition, ivory accents, mystic healer style'
  }
})
