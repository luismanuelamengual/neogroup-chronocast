import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'adas-strike',
  type: 'ability',
  name: "Ada's Strike",
  text: 'Deal 10 damage to an enemy slot and draw a card.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'epic',
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
      "Ada's Strike: the signature spell of the hero, a devastating blast of clockwork energy, steampunk steam era style"
  }
})
