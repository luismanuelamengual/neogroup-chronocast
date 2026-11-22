import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pale-zealot',
  type: 'ally',
  name: 'Pale Zealot',
  text: 'When it enters: draw the first Cultist of your deck. When it dies: deal 3 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  element: 'shadow',
  price: 1880,
  cost: 4,
  tribe: 'cultist',
  keywords: ['poison'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'cultist')
  },
  onDeath(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro', 'draw', 'tribe'] },
  art: {
    subject: 'a hooded doomsday cultist, the pale zealot, glaring at the viewer, dark end-of-time void style'
  }
})
