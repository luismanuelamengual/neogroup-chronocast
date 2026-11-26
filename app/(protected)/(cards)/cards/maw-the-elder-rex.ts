import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'maw-the-elder-rex',
  type: 'ally',
  reward: true,
  name: 'Maw, the Elder Rex',
  text: 'When it enters: deal 6 earth damage to a random enemy ally.',
  flavor: 'Older than the jungle, and hungrier.',
  faction: 'primal',
  restriction: { heroes: ['gorrak-tyrant-king'] },
  rarity: 'legendary',
  element: 'earth',
  weak: ['ice'],
  cost: 6,
  tribe: 'saurian',
  keywords: ['charge', 'unique'],
  attack: 8,
  health: 14,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'an enormous ancient tyrannosaurus with moss-covered scales, broken teeth and tribal war paint, roaring over a prehistoric jungle'
  }
})
