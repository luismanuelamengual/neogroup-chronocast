import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-vest',
  type: 'armor',
  subtype: 'suit',
  name: 'Nocturnal Vest',
  text: 'When it is equipped: the enemy hero loses 2 energy.',
  flavor: 'Darker than the night it hides in.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  armor: 2,
  durability: 4,
  onPlay(ctx) {
    drainEnergy(ctx, ctx.opponent, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Nocturnal Vest: a single vest made of copper with green patina, stuck in the sand, centered and seen from slightly below, teal accents, hunter style'
  }
})
