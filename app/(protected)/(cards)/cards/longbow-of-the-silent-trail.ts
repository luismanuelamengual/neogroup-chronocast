import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'longbow-of-the-silent-trail',
  type: 'weapon',
  name: 'Longbow of the Silent Trail',
  text: '',
  flavor: 'The arrow arrives before the sound.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  keywords: ['poison'],
  attack: 1,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject:
      'Longbow of the Silent Trail: a single longbow made of polished bronze with engraved spirals, on a mossy rock, swirling around the center, cobalt blue accents, hunter style'
  }
})
