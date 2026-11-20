import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'core-meltdown',
  type: 'ability',
  boss: true,
  name: 'Core Meltdown',
  text: 'Deal 10 damage to every enemy ally. Slow.',
  flavor: 'Warning. Warning. Warn-',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'epic',
  cost: 6,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 10)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: 'a giant machine core overheating and exploding in a blast of white-hot steam and sparks'
  }
})
