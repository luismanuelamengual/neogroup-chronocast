import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'radiant-halo',
  type: 'armor',
  name: 'Radiant Halo',
  text: '',
  flavor: 'Light that refuses to go out.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  armor: 2,
  durability: 4,
  ai: { value: 3 },
  art: {
    subject:
      'Radiant Halo: a single halo made of ivory and jade, on a mossy rock, diagonal dynamic composition, lime green accents, mystic healer style'
  }
})
