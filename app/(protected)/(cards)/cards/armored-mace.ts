import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'armored-mace',
  type: 'weapon',
  name: 'Armored Mace',
  text: '',
  flavor: 'Subtle it is not.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  attack: 6,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Armored Mace: a single mace made of blue steel with silver runes, on a worn wooden table, centered and seen from slightly below, magenta accents, warrior style'
  }
})
