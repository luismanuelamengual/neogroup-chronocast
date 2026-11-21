import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iron-buckler',
  type: 'attachment',
  name: 'Iron Buckler',
  text: 'Attach to an ally of yours: it has +6 health.',
  flavor: 'Small, round and stubborn.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 1,
  targets: ['friendlyAlly'],
  health: 6,
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a small round iron buckler shield with rivets and dents, strapped to a forearm'
  }
})
