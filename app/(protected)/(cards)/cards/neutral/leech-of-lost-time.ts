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
    subject:
      'Leech of Lost Time: an enchanted leech made of carved obsidian, on a pile of old coins, close-up filling the frame, gold accents, time rift wanderer style'
  }
})
