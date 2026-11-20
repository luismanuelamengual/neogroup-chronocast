import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'megacity-titan',
  type: 'ally',
  name: 'Megacity Titan',
  text: 'On enter: deal 10 damage to every enemy ally and draw 2 cards.',
  flavor: 'The city built it to protect itself. The city was wrong.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'mythic',
  price: 35000,
  cost: 8,
  attack: 30,
  health: 64,
  keywords: ['unique', 'quick', 'cleave'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 10)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 11, tags: ['removal', 'draw'] },
  art: {
    subject: 'a skyscraper-sized combat mech covered in neon advertisements walking between towers, searchlights on it'
  }
})
