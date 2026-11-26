import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flickering-mantle',
  type: 'armor',
  subtype: 'robe',
  name: 'Flickering Mantle',
  text: '',
  flavor: 'Now you see it, now you miss.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
  ai: { value: 3 },
  art: {
    subject:
      'Flickering Mantle: a single mantle made of pale ash wood wrapped in red cloth, half buried in snow, diagonal dynamic composition, scarlet accents, mage style'
  }
})
