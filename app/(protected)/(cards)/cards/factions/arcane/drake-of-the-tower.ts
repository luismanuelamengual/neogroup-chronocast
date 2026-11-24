import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'drake-of-the-tower',
  type: 'ally',
  name: 'Drake of the Tower',
  text: '',
  flavor: 'It guards the tower and eats the visitors.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['fire'],
  weak: ['ice'],
  price: 80,
  cost: 6,
  tribe: 'drake',
  attack: 8,
  health: 14,
  ai: { value: 6 },
  art: {
    subject:
      'Drake of the Tower: a drake with pearl-white scales and runes glowing on its scales, standing proud on a rock, emerald accents, medieval magic order style'
  }
})
