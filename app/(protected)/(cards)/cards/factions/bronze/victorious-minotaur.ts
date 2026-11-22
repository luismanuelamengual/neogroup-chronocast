import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'victorious-minotaur',
  type: 'ally',
  name: 'Victorious Minotaur',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['earth'],
  weak: ['acid'],
  price: 50,
  cost: 2,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject: 'a mythic ancient creature, the victorious minotaur, mid-leap, ancient bronze-age empire style'
  }
})
