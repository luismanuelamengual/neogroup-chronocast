import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scepter-of-storms',
  type: 'weapon',
  subtype: 'orb',
  name: 'Scepter of Storms',
  text: '',
  flavor: 'The sky obeys it, mostly.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  element: 'lightning',
  price: 140,
  cost: 2,
  keywords: ['ranged'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Scepter of Storms: a single scepter made of chrome with neon light strips, crackling with forked lightning, on a fur rug, seen from above, ivory accents, mage style'
  }
})
