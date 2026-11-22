import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgraths-blast',
  type: 'ability',
  name: "Morgrath's Blast",
  text: 'Deal 10 shadow damage to an enemy slot and draw a card.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'morgrath-lich-abbot' },
  rarity: 'epic',
  element: 'shadow',
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
      "Morgrath's Blast: the signature spell of the hero, a devastating blast of arcane energy, medieval magic order style"
  }
})
