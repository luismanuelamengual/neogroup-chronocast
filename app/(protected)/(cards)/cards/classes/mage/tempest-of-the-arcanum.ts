import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tempest-of-the-arcanum',
  type: 'ability',
  name: 'Tempest of the Arcanum',
  text: 'Deal 6 wind damage to every enemy ally. Slow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'wind',
  price: 690,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'Tempest of the Arcanum: a wave of destruction sweeping across a battlefield, mage style'
  }
})
