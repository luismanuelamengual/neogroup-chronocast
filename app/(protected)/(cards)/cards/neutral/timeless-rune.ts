import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'timeless-rune',
  type: 'attachment',
  name: 'Timeless Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['flying'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Timeless Rune: a glowing magical timeless charm, time rift wanderer style'
  }
})
