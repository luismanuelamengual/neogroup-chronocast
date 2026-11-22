import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slinger-of-the-sun-temple',
  type: 'ally',
  name: 'Slinger of the Sun Temple',
  text: 'When it enters: summon a Hoplite Conscript.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  tribe: 'legionnaire',
  attack: 3,
  health: 7,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'an ancient bronze-armored soldier, the slinger of the sun temple, crouching, ready to strike, ancient bronze-age empire style'
  }
})
