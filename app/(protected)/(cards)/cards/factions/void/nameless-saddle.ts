import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'nameless-saddle',
  type: 'attachment',
  name: 'Nameless Saddle',
  text: 'Attach to an ally of yours: it gains +2 attack and +3 health.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  attack: 2,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Nameless Saddle: a glowing magical nameless charm, dark end-of-time void style'
  }
})
