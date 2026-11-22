import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-silent-trail',
  type: 'ally',
  name: 'Bounty Hunter of the Silent Trail',
  text: 'When it dies: deal 3 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  keywords: ['quick'],
  attack: 3,
  health: 6,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a time-traveling adventurer, the bounty hunter of the silent trail, roaring, hunter style'
  }
})
