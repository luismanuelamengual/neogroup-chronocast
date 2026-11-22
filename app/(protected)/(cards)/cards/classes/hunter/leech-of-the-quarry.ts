import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'leech-of-the-quarry',
  type: 'attachment',
  name: 'Leech of the Quarry',
  text: "Attach to an enemy ally: it can't attack.",
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  targets: ['enemyAlly'],
  disarms: true,
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Leech of the Quarry: a glowing magical leech charm, hunter style'
  }
})
