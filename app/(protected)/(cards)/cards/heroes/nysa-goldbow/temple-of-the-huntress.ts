import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temple-of-the-huntress',
  type: 'location',
  name: 'Temple of the Huntress',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally and your allies gain +1 attack.',
  flavor: 'Every arrow loosed here is a prayer.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'legendary',
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
    buffAllies(ctx, ctx.owner, 1, 0)
  },
  ai: { value: 5, tags: ['removal', 'buff'] },
  art: {
    subject:
      'a white marble temple in a forest clearing with golden bows on its columns and deer drinking from a spring'
  }
})
