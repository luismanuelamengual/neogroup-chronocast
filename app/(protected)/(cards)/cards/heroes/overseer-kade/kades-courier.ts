import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kades-courier',
  type: 'ally',
  name: "Kade's Courier",
  text: 'When it enters: deal 1 damage to the enemy hero for each Enforcer of yours. When it attacks: deal 3 damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'legendary',
  price: 5600,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['quick', 'unique'],
  attack: 6,
  health: 11,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'enforcer').length)
  },
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 7, tags: ['aggro', 'tribe'] },
  art: {
    subject: "a cyberpunk street criminal, the kade's courier, roaring, neon cyberpunk future style"
  }
})
