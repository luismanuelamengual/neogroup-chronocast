import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ash-covered-stonethrower',
  type: 'ally',
  name: 'Ash-Covered Stonethrower',
  text: '',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  element: 'fire',
  resist: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'caveborn',
  attack: 4,
  health: 13,
  ai: { value: 4 },
  art: {
    subject:
      'a prehistoric tribe warrior in furs and bone ornaments, the ash-covered stonethrower, roaring, prehistoric jungle era style'
  }
})
