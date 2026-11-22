import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'drone-of-the-datastream',
  type: 'ally',
  name: 'Drone of the Datastream',
  text: 'When it dies: your Cyborgs gain +1 attack and +1 health. When it attacks: deal 1 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  element: 'sonic',
  weak: ['lightning'],
  price: 1560,
  cost: 2,
  tribe: 'cyborg',
  keywords: ['quick'],
  attack: 2,
  health: 8,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'cyborg', 1, 1)
  },
  onAttack(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 3, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject:
      'a futuristic cyborg with glowing implants, the drone of the datastream, glaring at the viewer, neon cyberpunk future style'
  }
})
