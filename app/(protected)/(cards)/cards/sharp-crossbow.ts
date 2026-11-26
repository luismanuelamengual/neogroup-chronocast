import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sharp-crossbow',
  type: 'weapon',
  name: 'Sharp Crossbow',
  text: '',
  flavor: 'One bolt, one lesson.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  durability: 3,
  ai: { value: 3 },
  art: {
    subject:
      'Sharp Crossbow: a single crossbow made of blackened iron with gold inlay, half buried in snow, dramatic backlight, gold accents, hunter style'
  }
})
