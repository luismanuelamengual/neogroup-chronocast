import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spark-of-the-crossroads',
  type: 'ally',
  name: 'Spark of the Crossroads',
  text: 'When it dies: you gain 2 Chronos this phase.',
  flavor: 'Born where all roads meet.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 50,
  cost: 2,
  tribe: 'elemental',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  onDeath(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Spark of the Crossroads: an elemental spark with a flickering winged shape made of swirling sand gold, standing proud on a rock, time rift wanderer style'
  }
})
