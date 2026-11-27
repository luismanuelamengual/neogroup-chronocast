import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'maw-the-elder-rex',
  type: 'ally',
  name: 'Maw, the Elder Rex',
  text: 'When it enters: a random enemy ally becomes your Prey and takes 6 earth damage.',
  flavor: 'Older than the jungle, and hungrier.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2320,
  element: 'earth',
  weak: ['ice'],
  cost: 6,
  tribe: 'saurian',
  keywords: ['charge', 'unique'],
  attack: 8,
  health: 14,
  onEnter(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
      damageAlly(ctx, prey, 6, 'earth')
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'an enormous ancient tyrannosaurus with moss-covered scales, broken teeth and tribal war paint, roaring over a prehistoric jungle'
  }
})
