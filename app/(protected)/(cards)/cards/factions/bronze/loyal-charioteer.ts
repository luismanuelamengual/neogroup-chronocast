import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'loyal-charioteer',
  type: 'ally',
  name: 'Loyal Charioteer',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject:
      'an ancient bronze-armored soldier, the loyal charioteer, glaring at the viewer, ancient bronze-age empire style'
  }
})
