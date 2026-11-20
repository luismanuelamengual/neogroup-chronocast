import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'steam-sentry',
  type: 'ally',
  name: 'Steam Sentry',
  text: '',
  flavor: 'It whistles before it fights. Politeness.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 20,
  keywords: ['guardian'],
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'a squat riveted steam robot with a boiler belly and a big shield, puffing steam from its head'
  }
})
