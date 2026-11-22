import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'doomsayer-of-rot',
  type: 'ally',
  name: 'Doomsayer of Rot',
  text: 'When it dies: deal 2 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'shadow',
  price: 50,
  cost: 2,
  tribe: 'cultist',
  attack: 3,
  health: 6,
  onDeath(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject: 'a hooded doomsday cultist, the doomsayer of rot, roaring, dark end-of-time void style'
  }
})
