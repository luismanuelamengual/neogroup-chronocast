import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scarred-raptor',
  type: 'ally',
  name: 'Scarred Raptor',
  text: '',
  flavor: 'Every scar taught it a new trick.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  weak: ['ice'],
  price: 50,
  cost: 2,
  tribe: 'saurian',
  attack: 3,
  health: 7,
  ai: { value: 2 },
  art: {
    subject:
      'Scarred Raptor: a raptor with a violet hide with silver spots and a crest of quills, pawing the ground, scarlet accents, prehistoric jungle era style'
  }
})
