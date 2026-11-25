import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-plan',
  type: 'ability',
  name: 'Endless Plan',
  text: 'Draw a card.',
  flavor: 'Step one: wait. Step two: wait longer.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject:
      'Endless Plan: a battle map table with glowing pieces and arrows, over burning grassland, centered and seen from slightly below, crimson accents, dark end-of-time void style'
  }
})
