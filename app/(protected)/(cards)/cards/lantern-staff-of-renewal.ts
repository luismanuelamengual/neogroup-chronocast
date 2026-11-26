import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lantern-staff-of-renewal',
  type: 'weapon',
  name: 'Lantern Staff of Renewal',
  text: '',
  flavor: 'Its light remembers how things used to be.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  keywords: ['lifesteal'],
  attack: 1,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject:
      'Lantern Staff of Renewal: a single staff made of chrome with neon light strips, on a workbench with tools, bursting toward the viewer, saffron yellow accents, mystic healer style'
  }
})
