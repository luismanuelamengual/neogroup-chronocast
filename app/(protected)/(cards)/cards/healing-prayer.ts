import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-prayer',
  type: 'ability',
  name: 'Healing Prayer',
  text: 'Your hero heals 10 and draw a card.',
  flavor: 'Spoken softly, heard everywhere.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Healing Prayer: prayer candles and beads glowing on a stone, above a calm lake at dusk, centered and seen from slightly below, amber accents, mystic healer style'
  }
})
