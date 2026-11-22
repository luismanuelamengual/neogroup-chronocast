import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holo-mech',
  type: 'ally',
  name: 'Holo Mech',
  text: 'When it attacks: deal 3 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'sonic',
  weak: ['lightning'],
  price: 205,
  cost: 5,
  tribe: 'cyborg',
  keywords: ['agile'],
  attack: 6,
  health: 10,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'a futuristic cyborg with glowing implants, the holo mech, charging into battle, neon cyberpunk future style'
  }
})
