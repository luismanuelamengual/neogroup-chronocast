import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'longbow-of-the-hawk',
  type: 'weapon',
  name: 'Longbow of the Hawk',
  text: '',
  flavor: 'It sees farther than its archer.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  element: 'wind',
  price: 140,
  cost: 2,
  keywords: ['poison'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Longbow of the Hawk: a single longbow made of gilded marble, swept by a spiraling gust with leaves, on a workbench with tools, dramatic backlight, gold accents, hunter style'
  }
})
