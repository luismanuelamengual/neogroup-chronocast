import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'void-spawn',
  type: 'ally',
  name: 'Void Spawn',
  text: '',
  flavor: 'It came from nothing. It wants everything.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 5,
  health: 3,
  ai: { value: 1 },
  art: {
    subject: 'a small wriggling creature of black goo with many glowing green eyes crawling out of a crack in reality'
  }
})
