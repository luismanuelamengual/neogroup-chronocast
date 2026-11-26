import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flail-of-the-vanguard',
  type: 'weapon',
  subtype: 'mace',
  name: 'Flail of the Vanguard',
  text: '',
  flavor: 'Chains, spikes and good intentions.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Flail of the Vanguard: a single flail made of ivory and jade, floating above a marble pedestal, seen from above, rose pink accents, warrior style'
  }
})
