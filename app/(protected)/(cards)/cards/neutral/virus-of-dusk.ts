import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'virus-of-dusk',
  type: 'attachment',
  name: 'Virus of Dusk',
  text: 'Attach to an enemy ally: it has -5 attack.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  attack: -5,
  targets: ['enemyAlly'],
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'Virus of Dusk: a glowing magical virus charm, time rift wanderer style'
  }
})
