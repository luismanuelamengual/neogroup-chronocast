import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-crystal',
  type: 'item',
  name: 'Mana Crystal',
  text: 'Gain 1 Chronos.',
  flavor: 'It hums when it is full.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['ramp'] },
  art: {
    subject: 'a glowing blue mana crystal floating above a stone pedestal, humming with energy'
  }
})
