import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-mech',
  type: 'ally',
  name: 'Encrypted Mech',
  text: 'When it enters: the enemy hero loses 1 energy.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  weak: ['lightning'],
  price: 190,
  cost: 4,
  tribe: 'cyborg',
  keywords: ['stealth'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
  },
  ai: { value: 4, tags: ['control'] },
  art: {
    subject:
      'Encrypted Mech: a mech built of chrome with cyan light strips, with a glowing furnace heart, standing guard, neon cyberpunk future style'
  }
})
