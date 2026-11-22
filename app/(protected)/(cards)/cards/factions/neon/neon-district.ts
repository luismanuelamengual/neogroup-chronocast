import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neon-district',
  type: 'artifact',
  name: 'Neon District',
  text: 'Artifact. At the start of each phase, draw a card. At the end of each phase, deal 2 damage to the enemy hero.',
  flavor: 'It never sleeps. It never forgets.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  onPhaseEnd(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 4, tags: ['draw', 'burn'] },
  art: {
    subject: 'a crowded neon district at night with holographic billboards, food stalls and flying cars'
  }
})
