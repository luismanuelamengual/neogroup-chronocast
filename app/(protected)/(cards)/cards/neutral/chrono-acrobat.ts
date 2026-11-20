import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'chrono-acrobat',
  type: 'ally',
  name: 'Chrono Acrobat',
  text: '',
  flavor: 'She bends a second until it snaps.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 8,
  health: 12,
  keywords: ['agile', 'quick'],
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject: 'an acrobat in a bright costume flipping through the air leaving afterimages of herself'
  }
})
