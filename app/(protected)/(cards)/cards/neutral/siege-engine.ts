import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'siege-engine',
  type: 'artifact',
  name: 'Siege Engine',
  text: 'Artifact with 3 uses. At the start of each phase, it deals 6 damage to a random enemy ally.',
  flavor: 'Aimed by nobody. Hits everybody.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a massive wooden siege catapult launching a flaming boulder over a battlefield'
  }
})
