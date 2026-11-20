import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'archwizard-morvane',
  type: 'ally',
  name: 'Archwizard Morvane',
  text: 'On enter: deal 8 damage to every enemy ally and draw a card.',
  flavor: 'He has lived in every century. In most of them, he was the villain.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 22,
  health: 48,
  keywords: ['unique', 'ranged'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 8)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 9, tags: ['removal', 'draw'] },
  art: {
    subject:
      'a legendary old wizard with a tall pointed hat and a staff crowned with a star, unleashing a wave of arcane light'
  }
})
