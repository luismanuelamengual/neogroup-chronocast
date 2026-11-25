import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'axe-of-the-vanguard',
  type: 'weapon',
  name: 'Axe of the Vanguard',
  text: '',
  flavor: 'The first to swing, the last to dull.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  attack: 5,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject:
      'Axe of the Vanguard: a single axe made of carved obsidian, on a pile of old coins, diagonal dynamic composition, crimson accents, warrior style'
  }
})
