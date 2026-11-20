import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hourglass-sentry',
  type: 'ally',
  name: 'Hourglass Sentry',
  text: '',
  flavor: 'It counts every second you stand in its way.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 5,
  health: 18,
  keywords: ['guardian'],
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'a sturdy guard with a giant hourglass-shaped shield, planted firmly on a bridge of floating stones'
  }
})
