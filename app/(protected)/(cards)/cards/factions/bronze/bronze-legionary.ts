import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cardOf, draw, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bronze-legionary',
  type: 'ally',
  name: 'Bronze Legionary',
  text: 'On enter: if another Bronze ally is next to it, draw a card.',
  flavor: 'Shield first, name later.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 2,
  attack: 8,
  health: 8,
  keywords: ['guardian'],
  onEnter(ctx) {
    if (neighbors(ctx).some((ally) => cardOf(ally).faction === 'bronze')) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['formation', 'draw'] },
  art: {
    subject:
      'a young legionary with a red-crested helmet and a polished bronze rectangular shield, standing guard on a Roman road at sunset'
  }
})
