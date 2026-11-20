import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spiked-pauldrons',
  type: 'armor',
  name: 'Spiked Pauldrons',
  text: 'At the start of each phase, deal 2 damage to a random enemy ally.',
  flavor: 'Hugs are not recommended.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  armor: 12,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a pair of heavy black pauldrons covered in sharp steel spikes'
  }
})
