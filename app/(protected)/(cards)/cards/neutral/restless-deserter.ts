import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-deserter',
  type: 'ally',
  name: 'Restless Deserter',
  text: 'When it enters: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  keywords: ['guardian'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the restless deserter, raising its weapon, time rift wanderer style'
  }
})
