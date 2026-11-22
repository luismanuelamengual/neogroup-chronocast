import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-the-ambush',
  type: 'ally',
  name: 'Scavenger of the Ambush',
  text: 'When it attacks: deal 2 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  health: 8,
  onAttack(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'a time-traveling adventurer, the scavenger of the ambush, roaring, hunter style'
  }
})
