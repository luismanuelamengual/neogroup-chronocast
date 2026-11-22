import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'neon-thug',
  type: 'ally',
  name: 'Neon Thug',
  text: '',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  attack: 4,
  health: 10,
  ai: { value: 3 },
  art: {
    subject: 'a cyberpunk street criminal, the neon thug, lunging forward, neon cyberpunk future style'
  }
})
