import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-raptor',
  type: 'ally',
  name: 'Scarred Raptor',
  text: 'When it dies: a random enemy ally becomes your Prey.',
  flavor: 'Every scar taught it a new trick.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  weak: ['ice'],
  price: 50,
  cost: 2,
  tribe: 'saurian',
  attack: 3,
  health: 7,
  onDeath(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Scarred Raptor: a raptor with a violet hide with silver spots and a crest of quills, pawing the ground, scarlet accents, prehistoric jungle era style'
  }
})
