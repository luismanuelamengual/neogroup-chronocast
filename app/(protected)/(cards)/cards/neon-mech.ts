import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neon-mech',
  type: 'ally',
  name: 'Neon Mech',
  text: 'When it attacks: deal 2 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  element: 'lightning',
  weak: ['lightning'],
  price: 480,
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
    subject:
      'Neon Mech: a mech built of gold filigree with blue dials, with a ticking clock face on its chest, firing steam, neon cyberpunk future style'
  }
})
