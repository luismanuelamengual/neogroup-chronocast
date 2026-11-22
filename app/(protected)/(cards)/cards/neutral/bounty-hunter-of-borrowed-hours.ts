import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-borrowed-hours',
  type: 'ally',
  name: 'Bounty Hunter of Borrowed Hours',
  text: 'When it enters: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  element: 'time',
  price: 155,
  cost: 2,
  keywords: ['flying'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'a time-traveling adventurer, the bounty hunter of borrowed hours, glaring at the viewer, time rift wanderer style'
  }
})
