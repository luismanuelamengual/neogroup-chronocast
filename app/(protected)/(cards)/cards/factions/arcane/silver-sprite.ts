import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'silver-sprite',
  type: 'ally',
  name: 'Silver Sprite',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 6,
  tribe: 'fae',
  attack: 7,
  health: 16,
  ai: { value: 6 },
  art: {
    subject:
      'Silver Sprite: a sprite with lilac skin and silver hair and a crown of mushrooms, roaring with jaws wide open, emerald accents, medieval magic order style'
  }
})
