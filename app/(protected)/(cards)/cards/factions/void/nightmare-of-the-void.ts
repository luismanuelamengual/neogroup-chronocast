import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nightmare-of-the-void',
  type: 'ally',
  name: 'Nightmare of the Void',
  text: 'When it dies: your Horrors gain +1 attack and +1 health.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 570,
  cost: 3,
  tribe: 'horror',
  attack: 5,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'horror', 1, 1)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject: 'an eldritch horror from the end of time, the nightmare of the void, roaring, dark end-of-time void style'
  }
})
