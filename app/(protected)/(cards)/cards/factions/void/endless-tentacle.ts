import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-tentacle',
  type: 'ally',
  name: 'Endless Tentacle',
  text: 'When it dies: deal 5 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 750,
  cost: 7,
  tribe: 'horror',
  attack: 9,
  health: 12,
  onDeath(ctx) {
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 8, tags: ['aggro'] },
  art: {
    subject: 'an eldritch horror from the end of time, the endless tentacle, mid-leap, dark end-of-time void style'
  }
})
