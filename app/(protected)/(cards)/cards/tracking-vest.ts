import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-vest',
  type: 'armor',
  subtype: 'leather',
  name: 'Tracking Vest',
  text: 'When it is equipped: a random enemy ally becomes your Prey.',
  flavor: 'Pockets for every trail.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
  onPlay(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Tracking Vest: a single vest made of chrome with neon light strips, on a fur rug, centered and seen from slightly below, rose pink accents, hunter style'
  }
})
