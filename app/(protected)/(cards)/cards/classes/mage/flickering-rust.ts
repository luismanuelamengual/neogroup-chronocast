import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-rust',
  type: 'attachment',
  name: 'Flickering Rust',
  text: 'Attach to an enemy ally: each time it attacks, it takes 3 acid damage.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'acid',
  price: 510,
  cost: 2,
  targets: ['enemyAlly'],
  onHostAttack(ctx, host) {
    damageAlly(ctx, host, 3)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Flickering Rust: a glowing magical flickering charm, mage style'
  }
})
