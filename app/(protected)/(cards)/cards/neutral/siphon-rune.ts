import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'siphon-rune',
  type: 'ability',
  name: 'Siphon Rune',
  text: 'The enemy hero loses 2 energy. Your hero gains 1.',
  flavor: 'What is theirs flows, slowly, toward you.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    drainEnergy(ctx, ctx.opponent, 2)
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject: 'a glowing rune circle on the ground pulling golden energy streams from one figure to another'
  }
})
