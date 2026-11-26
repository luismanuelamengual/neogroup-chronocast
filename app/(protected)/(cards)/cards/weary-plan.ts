import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-plan',
  type: 'ability',
  subtype: 'program',
  name: 'Weary Plan',
  text: 'Draw 2 cards.',
  flavor: 'Not elegant, but it works.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Weary Plan: a battle map table with glowing pieces and arrows, inside a cave of crystals, swirling around the center, turquoise accents, neon cyberpunk future style'
  }
})
