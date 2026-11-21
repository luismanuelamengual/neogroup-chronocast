import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'jammer-unit',
  type: 'ally',
  name: 'Jammer Unit',
  text: 'On enter: stun a random enemy ally.',
  flavor: 'All frequencies: static.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 7,
  health: 11,
  onEnter(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject: 'a squat robot with antennas emitting purple jamming waves that freeze nearby machines'
  }
})
