import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'labrys-of-the-labyrinth',
  type: 'weapon',
  name: 'Labrys of the Labyrinth',
  text: 'When it is equipped: stun a random enemy ally.',
  flavor: 'Two blades, one way out.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2320,
  cost: 4,
  keywords: ['unique'],
  attack: 6,
  durability: 3,
  onPlay(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 6 },
  art: {
    subject:
      'Labrys of the Labyrinth: a huge double-headed bronze axe with bull horns engraved on its blades, stuck in the stone floor of a labyrinth, lit by torches, crimson accents'
  }
})
