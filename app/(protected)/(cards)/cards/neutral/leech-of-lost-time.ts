import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'leech-of-lost-time',
  type: 'attachment',
  name: 'Leech of Lost Time',
  text: "Attach to an enemy ally: it can't use its ability and has -1 attack.",
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 40,
  cost: 1,
  attack: -1,
  targets: ['enemyAlly'],
  silences: true,
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Leech of Lost Time: a glowing magical leech charm, time rift wanderer style'
  }
})
