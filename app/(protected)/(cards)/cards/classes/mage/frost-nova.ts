import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-nova',
  type: 'ability',
  name: 'Frost Nova',
  text: 'Deal 6 damage to every enemy ally. Slow.',
  flavor: 'Winter, all at once.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 190,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'a ring of jagged ice crystals exploding outward from a mage, freezing everything around in pale blue frost'
  }
})
