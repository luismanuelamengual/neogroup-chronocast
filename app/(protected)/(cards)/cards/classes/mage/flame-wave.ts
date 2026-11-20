import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flame-wave',
  type: 'ability',
  name: 'Flame Wave',
  text: 'Deal 6 damage to every enemy ally. Slow.',
  flavor: 'Warm hands, cold hearts.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 60,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a wave of orange fire rolling across the ground toward a group of monsters'
  }
})
