import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'breastplate-of-rage',
  type: 'armor',
  subtype: 'plate',
  name: 'Breastplate of Rage',
  text: '',
  flavor: 'Forged hot, worn hotter.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 2,
  durability: 3,
  ai: { value: 2 },
  art: {
    subject:
      'Breastplate of Rage: a single breastplate made of crystal and silver filigree, on a pile of old coins, diagonal dynamic composition, tangerine accents, warrior style'
  }
})
