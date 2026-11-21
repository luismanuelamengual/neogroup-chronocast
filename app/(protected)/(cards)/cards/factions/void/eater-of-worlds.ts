import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eater-of-worlds',
  type: 'ally',
  name: 'Eater of Worlds',
  text: 'On enter: destroy your weakest other ally: if you do, deal 12 damage to every enemy ally and draw 2 cards.',
  flavor: 'Planets are just appetizers.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'exotic',
  price: 14000,
  cost: 8,
  attack: 32,
  health: 32,
  keywords: ['unique'],
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      damageAllAllies(ctx, ctx.opponent, 12)
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 10, tags: ['removal', 'draw'] },
  art: {
    subject: 'a cosmic horror with a mouth bigger than a planet devouring a world in a swirling nebula'
  }
})
