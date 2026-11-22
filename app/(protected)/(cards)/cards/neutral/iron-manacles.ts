import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iron-manacles',
  type: 'attachment',
  name: 'Iron Manacles',
  text: 'Attach to an enemy ally: it cannot attack.',
  flavor: 'It can still glare at you.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 2,
  targets: ['enemyAlly'],
  disarms: true,
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'heavy iron manacles chained to a stone floor, locked around the wrists of a furious warrior'
  }
})
