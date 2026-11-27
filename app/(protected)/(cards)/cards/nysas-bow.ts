import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, isPrey, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nysas-bow',
  type: 'weapon',
  subtype: 'bow',
  name: "Nysa's Bow",
  text: 'When your hero attacks a Prey with it: draw a card.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)

    if (unit && isPrey(ctx, unit)) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Nysa's Bow: a single bow made of blackened iron with gold inlay, swept by a spiraling gust with leaves, on a workbench with tools, dramatic backlight, magenta accents, prehistoric jungle era style"
  }
})
