import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volatile-mark',
  type: 'attachment',
  name: 'Volatile Mark',
  text: 'Attach to an enemy ally: each time it attacks, it takes 2 ice damage.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'ice',
  price: 140,
  cost: 1,
  targets: ['enemyAlly'],
  onHostAttack(ctx, host) {
    damageAlly(ctx, host, 2)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Volatile Mark: a glowing magical volatile charm, mage style'
  }
})
