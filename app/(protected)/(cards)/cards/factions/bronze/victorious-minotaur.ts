import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'victorious-minotaur',
  type: 'ally',
  name: 'Victorious Minotaur',
  text: '',
  flavor: 'It found the way out of the labyrinth. Then went back in.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['earth'],
  weak: ['acid'],
  price: 50,
  cost: 2,
  tribe: 'colossus',
  keywords: ['guardian', 'retaliate'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject:
      'Victorious Minotaur: a minotaur with a jet black hide and broken chains on its limbs, standing proud on a rock, ivory accents, ancient bronze-age empire style'
  }
})
