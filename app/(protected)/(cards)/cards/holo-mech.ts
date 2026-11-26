import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holo-mech',
  type: 'ally',
  name: 'Holo Mech',
  text: 'When it attacks: deal 3 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  element: 'sonic',
  weak: ['lightning'],
  price: 200,
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
      'Holo Mech: a mech built of polished brass with ruby lenses, with a spinning propeller, banking through the air, neon cyberpunk future style'
  }
})
