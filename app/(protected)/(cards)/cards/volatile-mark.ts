import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volatile-mark',
  type: 'attachment',
  subtype: 'curse',
  name: 'Volatile Mark',
  text: 'Attach to an enemy ally: when it dies, deal 4 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  targets: ['enemyAlly'],
  onHostDeath(ctx) {
    damageEnemyHero(ctx, 4, 'shadow')
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Volatile Mark: an enchanted mark made of copper with green patina, covered in frost and ice crystals, half buried in snow, seen from above, emerald accents, mage style'
  }
})
