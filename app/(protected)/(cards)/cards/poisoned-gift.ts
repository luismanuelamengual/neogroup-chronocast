import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'poisoned-gift',
  type: 'ability',
  subtype: 'program',
  name: 'Poisoned Gift',
  text: 'Each player draws 3 cards.',
  flavor: 'Everyone gets a present. Not everyone wants it.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
    draw(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Poisoned Gift: a gift box wrapped in green ribbon with a skull-shaped bow, faint toxic mist leaking from under its lid, close-up filling the frame, toxic green accents, time rift wanderer style'
  }
})
