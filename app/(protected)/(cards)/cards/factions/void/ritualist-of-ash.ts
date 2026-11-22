import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ritualist-of-ash',
  type: 'ally',
  name: 'Ritualist of Ash',
  text: 'When it enters: sacrifice your weakest other ally: if you do, draw 2 cards.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  element: 'fire',
  price: 750,
  cost: 6,
  tribe: 'cultist',
  attack: 8,
  health: 13,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 7, tags: ['draw', 'sacrifice'] },
  art: {
    subject: 'a hooded doomsday cultist, the ritualist of ash, lunging forward, dark end-of-time void style'
  }
})
