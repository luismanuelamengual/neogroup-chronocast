import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-plan',
  type: 'ability',
  subtype: 'ritual',
  name: 'Endless Plan',
  text: 'Draw a card. If your discard pile has 10 or more cards, draw another one.',
  flavor: 'Step one: wait. Step two: wait longer.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, discardSize(ctx, ctx.owner) >= 10 ? 2 : 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject:
      'Endless Plan: a battle map table with glowing pieces and arrows, over burning grassland, centered and seen from slightly below, crimson accents, dark end-of-time void style'
  }
})
