import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aqueduct-engineer',
  type: 'ally',
  name: 'Aqueduct Engineer',
  text: 'On enter: your hero gains 8 armor.',
  flavor: 'Water, roads and walls. Empires are built by plumbers.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 12,
  health: 14,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 8)
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'a Roman engineer with a wax tablet and measuring tools in front of a giant stone aqueduct under construction'
  }
})
