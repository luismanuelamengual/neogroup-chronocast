import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'information-broker',
  type: 'ally',
  name: 'Information Broker',
  text: 'At the start of each phase, draw a card.',
  flavor: 'Everyone has a price. She knows all of them.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 6,
  health: 9,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a sly information broker in a neon-lit booth, holographic files floating around her'
  }
})
