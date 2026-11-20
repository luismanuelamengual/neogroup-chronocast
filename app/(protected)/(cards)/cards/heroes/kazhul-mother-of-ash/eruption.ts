import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eruption',
  type: 'ability',
  boss: true,
  name: 'Eruption',
  text: 'Deal 8 damage to every enemy ally. Slow.',
  flavor: 'The mountain wakes up angry.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kazhul-mother-of-ash' },
  rarity: 'epic',
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 8)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a volcano erupting in a massive explosion of lava and ash over a prehistoric jungle'
  }
})
