import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, healHero, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leech-of-lost-time',
  type: 'attachment',
  subtype: 'curse',
  name: 'Leech of Lost Time',
  text: 'Attach to an enemy ally: it has -1 attack. At the start of each phase: it takes 1 shadow damage and your hero heals 1.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  attack: -1,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      damageAlly(ctx, found.unit, 1, 'shadow')
      healHero(ctx, 1)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Leech of Lost Time: an enchanted leech made of carved obsidian, on a pile of old coins, close-up filling the frame, gold accents, time rift wanderer style'
  }
})
