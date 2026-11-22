import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neon-mech',
  type: 'ally',
  name: 'Neon Mech',
  text: 'When it attacks: deal 2 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  element: 'lightning',
  weak: ['lightning'],
  price: 630,
  cost: 4,
  tribe: 'cyborg',
  keywords: ['quick'],
  attack: 6,
  health: 8,
  onAttack(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject: 'a futuristic cyborg with glowing implants, the neon mech, roaring, neon cyberpunk future style'
  }
})
