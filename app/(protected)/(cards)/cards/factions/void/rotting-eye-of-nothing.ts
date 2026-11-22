import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rotting-eye-of-nothing',
  type: 'ally',
  name: 'Rotting Eye of Nothing',
  text: 'When it enters: your other Horrors gain +1 attack and +1 health.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 1560,
  cost: 2,
  tribe: 'horror',
  keywords: ['lifesteal'],
  attack: 3,
  health: 5,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'horror', 1, 1, true)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'an eldritch horror from the end of time, the rotting eye of nothing, raising its weapon, dark end-of-time void style'
  }
})
