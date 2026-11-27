import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, recharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brassmaws-bolt',
  type: 'ability',
  subtype: 'gadget',
  name: "Brassmaw's Bolt",
  text: 'Deal 6 sonic damage to an enemy slot, and your artifacts with uses gain 1 use.',
  faction: 'clockwork',
  restriction: { heroes: ['chancellor-brassmaw'] },
  rarity: 'epic',
  element: 'sonic',
  price: 1200,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6, 'sonic')
    recharge(ctx, 'all', 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Brassmaw's Bolt: a crackling bolt of energy streaking forward, surrounded by rippling sound waves, in a sunlit meadow, swirling around the center, crimson accents, steampunk steam era style"
  }
})
