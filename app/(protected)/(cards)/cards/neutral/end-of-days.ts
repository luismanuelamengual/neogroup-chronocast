import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'end-of-days',
  type: 'ability',
  name: 'End of Days',
  text: 'Deal 20 damage to every ally, yours too. Slow.',
  flavor: 'Every era ends. This is how.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 20)
    damageAllAllies(ctx, ctx.owner, 20)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: 'a cataclysmic wave of turquoise fire sweeping across a battlefield under a cracked sky'
  }
})
