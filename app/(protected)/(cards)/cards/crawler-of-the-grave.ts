import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crawler-of-the-grave',
  type: 'ally',
  name: 'Crawler of the Grave',
  text: 'When it enters: sacrifice your weakest other ally: if you do, draw 2 cards.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
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
      'Crawler of the Grave: a crawler with oily black flesh with ultraviolet eyes and a gaping maw in its chest, mid-stride, rose pink accents, dark end-of-time void style'
  }
})
