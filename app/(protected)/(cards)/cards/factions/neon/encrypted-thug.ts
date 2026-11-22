import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-thug',
  type: 'ally',
  name: 'Encrypted Thug',
  text: 'When another Enforcer of yours enters: your hero heals 2.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  tribe: 'enforcer',
  keywords: ['ranged'],
  attack: 3,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'enforcer')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 2, tags: ['aggro', 'heal'] },
  art: {
    subject: 'a cyberpunk street criminal, the encrypted thug, lunging forward, neon cyberpunk future style'
  }
})
