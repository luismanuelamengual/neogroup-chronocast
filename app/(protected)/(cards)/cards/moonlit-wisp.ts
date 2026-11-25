import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-wisp',
  type: 'ally',
  name: 'Moonlit Wisp',
  text: 'When it enters: draw a card.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 50,
  cost: 2,
  tribe: 'fae',
  keywords: ['ranged'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Moonlit Wisp: a wisp with rose skin and ivy hair and feathered wings, pawing the ground, turquoise accents, medieval magic order style'
  }
})
