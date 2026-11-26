import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'huntmistress',
  type: 'ally',
  name: 'Huntmistress',
  text: 'When it enters: draw the first trap of your deck.',
  flavor: 'She knows where every snare in the jungle lies.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1000,
  cost: 4,
  tribe: 'beast',
  keywords: ['ranged'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    seekType(ctx, ctx.owner, 'trap')
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Huntmistress: a fierce huntress riding a sabertooth tiger, bow drawn, feathers in her hair, leaping over a jungle river, dynamic action pose, lime green accents, prehistoric jungle era style'
  }
})
