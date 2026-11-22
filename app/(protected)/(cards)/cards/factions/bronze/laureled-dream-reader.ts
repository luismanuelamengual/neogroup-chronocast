import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laureled-dream-reader',
  type: 'ally',
  name: 'Laureled Dream Reader',
  text: 'When it enters: draw a card.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'an ancient temple seer in white robes, the laureled dream reader, lunging forward, ancient bronze-age empire style'
  }
})
