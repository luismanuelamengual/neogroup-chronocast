import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spirit-bound-bell',
  type: 'weapon',
  subtype: 'orb',
  name: 'Spirit-Bound Bell',
  text: '',
  flavor: 'Its toll calls the dead to their posts.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'sonic',
  price: 50,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Spirit-Bound Bell: a single bell made of carved obsidian, surrounded by rippling sound waves, on a mossy rock, swirling around the center, amber accents, mystic healer style'
  }
})
