import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'final-toll',
  type: 'ability',
  boss: true,
  name: 'The Final Toll',
  text: 'Deal 20 damage to an enemy slot and deal 4 damage to every enemy ally. Slow.',
  flavor: 'The bell rings once. Only once.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'epic',
  cost: 5,
  speed: 'slow',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 20)
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a giant black bell ringing in the void, a shockwave of dark energy rolling out'
  }
})
