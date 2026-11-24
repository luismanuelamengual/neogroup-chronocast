import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'breastplate-of-rage',
  type: 'armor',
  name: 'Breastplate of Rage',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 6,
  ai: { value: 2 },
  art: {
    subject:
      'Breastplate of Rage: a single breastplate made of crystal and silver filigree, on a pile of old coins, diagonal dynamic composition, tangerine accents, warrior style'
  }
})
