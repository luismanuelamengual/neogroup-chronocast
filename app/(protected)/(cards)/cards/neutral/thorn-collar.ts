import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thorn-collar',
  type: 'attachment',
  name: 'Thorn Collar',
  text: 'Attach to an enemy ally: each time it attacks, it loses 4 health.',
  flavor: 'Every swing tightens it.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  targets: ['enemyAlly'],
  onHostAttack(ctx, host) {
    damageAlly(ctx, host, 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a spiked thorny collar of black iron tightening around the neck of a snarling beast'
  }
})
