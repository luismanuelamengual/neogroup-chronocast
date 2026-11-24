import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brassmaws-bolt',
  type: 'ability',
  name: "Brassmaw's Bolt",
  text: 'Deal 10 sonic damage to an enemy slot and draw a card.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'epic',
  element: 'sonic',
  price: 1880,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Brassmaw's Bolt: a crackling bolt of energy streaking forward, surrounded by rippling sound waves, in a sunlit meadow, swirling around the center, crimson accents, steampunk steam era style"
  }
})
