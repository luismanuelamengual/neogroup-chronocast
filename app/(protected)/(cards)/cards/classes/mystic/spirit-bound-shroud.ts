import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spirit-bound-shroud',
  type: 'armor',
  name: 'Spirit-Bound Shroud',
  text: '',
  flavor: 'The ancestors keep watch from its folds.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Spirit-Bound Shroud: a single shroud made of rough stone and sinew, on cracked stone tiles, dramatic backlight, tangerine accents, mystic healer style'
  }
})
