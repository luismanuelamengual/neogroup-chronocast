import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stasis-bubble',
  type: 'attachment',
  name: 'Stasis Bubble',
  text: 'Attach to an ally of yours: it gains shield (it ignores the first damage it takes).',
  flavor: 'Time stops an inch before the blade.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 1,
  targets: ['friendlyAlly'],
  keywords: ['shield'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a shimmering bubble of frozen time around a soldier, a blade stopped right at its surface'
  }
})
