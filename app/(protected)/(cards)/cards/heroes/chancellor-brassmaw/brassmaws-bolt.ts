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
      "Brassmaw's Bolt: the signature spell of the hero, a devastating blast of clockwork energy, steampunk steam era style"
  }
})
