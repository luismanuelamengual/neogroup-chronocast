import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'frozen-wand',
  type: 'weapon',
  name: 'Frozen Wand',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'ice',
  price: 190,
  cost: 4,
  attack: 5,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject:
      'Frozen Wand: a single wand made of gilded marble, covered in frost and ice crystals, on a pile of old coins, dramatic backlight, teal accents, mage style'
  }
})
