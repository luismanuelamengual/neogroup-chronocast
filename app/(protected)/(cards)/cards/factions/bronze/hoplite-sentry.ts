import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hoplite-sentry',
  type: 'ally',
  name: 'Hoplite Sentry',
  text: '',
  flavor: 'Behind his shield, a whole city sleeps.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 3,
  health: 12,
  keywords: ['guardian'],
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject: 'a young Greek hoplite with a round bronze shield and a spear, standing guard at a city gate at dawn'
  }
})
