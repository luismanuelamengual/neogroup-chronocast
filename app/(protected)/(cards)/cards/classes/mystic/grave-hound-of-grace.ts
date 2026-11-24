import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'grave-hound-of-grace',
  type: 'ally',
  name: 'Grave Hound of Grace',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 65,
  cost: 4,
  tribe: 'undead',
  attack: 4,
  health: 13,
  ai: { value: 4 },
  art: {
    subject:
      'Grave Hound of Grace: a hound with a black tattered shroud and grave dirt falling off it, standing proud on a rock, ivory accents, mystic healer style'
  }
})
