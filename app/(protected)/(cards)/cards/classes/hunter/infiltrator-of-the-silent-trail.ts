import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-the-silent-trail',
  type: 'ally',
  name: 'Infiltrator of the Silent Trail',
  text: 'When it dies: deal 3 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  tribe: 'netrunner',
  attack: 2,
  health: 8,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the infiltrator of the silent trail, raising its weapon, hunter style'
  }
})
