import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlight-enchantress',
  type: 'ally',
  name: 'Moonlight Enchantress',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally.',
  flavor: 'Under the moon, every wish has a cost.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 10,
  health: 24,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'an elegant enchantress floating under a full moon, silver threads of magic spiraling from her fingers'
  }
})
