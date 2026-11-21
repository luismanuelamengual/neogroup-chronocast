import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rusted-shackles',
  type: 'attachment',
  name: 'Rusted Shackles',
  text: 'Attach to an enemy ally: it has -6 attack.',
  flavor: 'Old chains still bite.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 1,
  targets: ['enemyAlly'],
  attack: -6,
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'heavy rusted iron shackles locked around the wrists of a struggling warrior'
  }
})
