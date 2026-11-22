import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hoplite-conscript',
  type: 'ally',
  token: true,
  name: 'Hoplite Conscript',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  cost: 1,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 1,
  health: 5,
  ai: { value: 1 },
  art: {
    subject: 'a young conscript with a round bronze shield, ancient bronze-age empire style'
  }
})
