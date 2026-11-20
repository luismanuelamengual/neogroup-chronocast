import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-plate',
  type: 'armor',
  reward: true,
  name: 'Storm Plate',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally.',
  flavor: 'It crackles when you touch it. And when you think about it.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'legendary',
  cost: 4,
  armor: 28,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a sleek black and blue armor with lightning arcs running across its plates'
  }
})
