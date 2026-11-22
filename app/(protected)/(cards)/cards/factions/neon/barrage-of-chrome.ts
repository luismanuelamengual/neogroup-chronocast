import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-chrome',
  type: 'ability',
  name: 'Barrage of Chrome',
  text: 'Deal 8 lightning damage to an enemy slot.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  element: 'lightning',
  price: 55,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Barrage of Chrome: a crackling bolt of energy striking a lone target, neon cyberpunk future style'
  }
})
