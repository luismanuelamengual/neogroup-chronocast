import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-statics-gunslinger',
  type: 'ally',
  name: "Queen Static's Gunslinger",
  text: 'When it dies: your Enforcers gain +1 attack and +1 health. At the end of each phase: deal 1 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'legendary',
  element: 'lightning',
  price: 5600,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['unique'],
  attack: 6,
  health: 14,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 1, 1)
  },
  onPhaseEnd(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 7, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject:
      "a cyberpunk street criminal, the queen static's gunslinger, raising its weapon, neon cyberpunk future style"
  }
})
