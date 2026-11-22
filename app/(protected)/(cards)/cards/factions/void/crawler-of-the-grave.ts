import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crawler-of-the-grave',
  type: 'ally',
  name: 'Crawler of the Grave',
  text: 'When it enters: sacrifice your weakest other ally: if you do, draw 2 cards.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 50,
  cost: 2,
  tribe: 'horror',
  attack: 3,
  health: 5,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 2, tags: ['draw', 'sacrifice'] },
  art: {
    subject:
      'an eldritch horror from the end of time, the crawler of the grave, charging into battle, dark end-of-time void style'
  }
})
