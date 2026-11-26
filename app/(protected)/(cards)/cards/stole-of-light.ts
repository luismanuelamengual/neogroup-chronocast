import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stole-of-light',
  type: 'armor',
  name: 'Stole of Light',
  text: '',
  flavor: 'A thread of sunrise across the shoulders.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  armor: 3,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject:
      'Stole of Light: a single stole made of crystal and silver filigree, on a pile of old coins, diagonal dynamic composition, cobalt blue accents, mystic healer style'
  }
})
