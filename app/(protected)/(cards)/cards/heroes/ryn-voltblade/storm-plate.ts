import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-plate',
  type: 'armor',
  reward: true,
  name: 'Storm Plate',
  text: 'At the start of each phase: deal 2 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'legendary',
  element: 'lightning',
  cost: 4,
  keywords: ['unique'],
  armor: 12,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a sleek black and blue armor with lightning arcs running across its plates'
  }
})
