import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'astral-robe',
  type: 'armor',
  name: 'Astral Robe',
  text: '',
  flavor: 'Woven from the night sky, stitched with stars.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'exotic',
  price: 11600,
  cost: 3,
  armor: 3,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Astral Robe: a single robe made of blue steel with silver runes, on cracked stone tiles, diagonal dynamic composition, tangerine accents, mage style'
  }
})
