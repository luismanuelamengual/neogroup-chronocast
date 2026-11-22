import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-mech',
  type: 'ally',
  name: 'Encrypted Mech',
  text: 'When it enters: the enemy hero loses 1 energy.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
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
    subject: 'a futuristic cyborg with glowing implants, the encrypted mech, mid-leap, neon cyberpunk future style'
  }
})
