import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'winged-harness',
  type: 'attachment',
  name: 'Winged Harness',
  text: 'Attach to an ally of yours: it has +2 attack and flying.',
  flavor: 'Clockwork wings, leather straps, no fear of heights.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 480,
  cost: 2,
  targets: ['friendlyAlly'],
  attack: 2,
  keywords: ['flying'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a leather harness with brass clockwork wings unfolding on the back of a soldier'
  }
})
