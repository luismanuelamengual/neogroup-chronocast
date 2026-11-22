import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-chrononaut',
  type: 'ally',
  name: 'Furious Chrononaut',
  text: 'When it dies: your hero gains 3 armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  keywords: ['charge'],
  attack: 2,
  health: 8,
  onDeath(ctx) {
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'a time-traveling adventurer, the furious chrononaut, charging into battle, warrior style'
  }
})
