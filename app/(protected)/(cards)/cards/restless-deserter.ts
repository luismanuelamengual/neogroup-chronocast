import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-deserter',
  type: 'ally',
  name: 'Restless Deserter',
  text: 'When it enters: draw a card.',
  flavor: 'He left the war. The war did not leave him.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 420,
  cost: 3,
  keywords: ['guardian', 'retaliate'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Restless Deserter: a muscular young lizardfolk woman with olive scales and a jeweled brow piercing, wearing a feathered cap, dressed in a patchwork coat stitched from fabrics of many centuries, dragging a broken standard, with a mischievous wink, violet accents, time rift wanderer style'
  }
})
