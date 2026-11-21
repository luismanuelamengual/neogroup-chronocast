import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'shade-lurker',
  type: 'ally',
  name: 'Shade Lurker',
  text: '',
  flavor: 'Every shadow in the void has someone in it.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 12,
  health: 7,
  keywords: ['stealth'],
  ai: { value: 3 },
  art: {
    subject: 'a tall thin shadow creature with long claws emerging from a dark corner, only its green eyes visible'
  }
})
