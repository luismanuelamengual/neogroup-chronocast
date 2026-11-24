import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'copper-gyrocopter',
  type: 'ally',
  name: 'Copper Gyrocopter',
  text: '',
  flavor: 'Mostly flies. Occasionally lands on purpose.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  weak: ['wind'],
  price: 50,
  cost: 2,
  tribe: 'skyship',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject:
      'Copper Gyrocopter: a gyrocopter built of gold filigree with blue dials, with a spinning propeller, turning its lens toward the viewer, steampunk steam era style'
  }
})
