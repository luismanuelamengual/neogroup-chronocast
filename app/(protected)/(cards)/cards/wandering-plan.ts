import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-plan',
  type: 'ability',
  subtype: 'program',
  name: 'Wandering Plan',
  text: 'Draw a card for each enemy ally (up to 3).',
  flavor: 'The plan changes every era.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, Math.min(3, alliesOf(ctx, ctx.opponent).length))
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Wandering Plan: a battle map table with glowing pieces and arrows, in a snowy pass, diagonal dynamic composition, cobalt blue accents, time rift wanderer style'
  }
})
