import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courier-of-the-mainframe',
  type: 'ally',
  name: 'Courier of the Mainframe',
  text: 'When it attacks: deal 3 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'sonic',
  price: 220,
  cost: 6,
  tribe: 'enforcer',
  attack: 8,
  health: 12,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject:
      'Courier of the Mainframe: a wiry elderly android man with a smooth metal scalp, heavy stubble and a beaded chin piercing, wearing a street hood, dressed in a bulky riot exosuit, clutching a sealed glowing letter, with a haunted stare, ivory accents, neon cyberpunk future style'
  }
})
