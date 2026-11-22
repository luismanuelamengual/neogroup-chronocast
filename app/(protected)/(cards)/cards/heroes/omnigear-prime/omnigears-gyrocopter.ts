import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigears-gyrocopter',
  type: 'ally',
  name: "Omnigear's Gyrocopter",
  text: 'When it enters: your other Skyships gain +2 attack and +2 health. At the start of each phase: your hero gains 2 armor.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'legendary',
  weak: ['wind'],
  price: 5600,
  cost: 5,
  tribe: 'skyship',
  keywords: ['shield', 'unique'],
  attack: 6,
  health: 8,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'skyship', 2, 2, true)
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['buff', 'defense', 'tribe'] },
  art: {
    subject: "a steampunk flying machine, the omnigear's gyrocopter, standing guard, steampunk steam era style"
  }
})
