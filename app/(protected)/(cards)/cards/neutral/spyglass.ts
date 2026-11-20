import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spyglass',
  type: 'item',
  name: 'Spyglass',
  text: 'Draw a card.',
  flavor: 'See what comes next.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'a brass spyglass on a map table pointing at a glowing rift on the horizon'
  }
})
