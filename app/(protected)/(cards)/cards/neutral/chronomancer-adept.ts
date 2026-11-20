import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chronomancer-adept',
  type: 'ally',
  name: 'Chronomancer Adept',
  text: 'On enter: gain 2 Chronos.',
  flavor: 'She keeps spare seconds in a jar.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  health: 18,
  keywords: ['ranged'],
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['ramp'] },
  art: {
    subject: 'a young mage holding a glass jar full of glowing floating clock hands'
  }
})
