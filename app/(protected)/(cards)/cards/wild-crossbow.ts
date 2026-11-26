import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wild-crossbow',
  type: 'weapon',
  subtype: 'crossbow',
  name: 'Wild Crossbow',
  text: '',
  flavor: 'Strung with jungle vine and bad temper.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  attack: 6,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Wild Crossbow: a single crossbow made of ivory and jade, floating above a marble pedestal, bursting toward the viewer, magenta accents, hunter style'
  }
})
