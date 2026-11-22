import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vorhals-spike',
  type: 'ability',
  name: "Vorhal's Spike",
  text: 'Deal 10 time damage to an enemy slot and draw a card.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'epic',
  element: 'time',
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
      "Vorhal's Spike: the signature spell of the hero, a devastating blast of void energy, dark end-of-time void style"
  }
})
