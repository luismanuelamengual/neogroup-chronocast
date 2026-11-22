import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalking-fortune-teller',
  type: 'ally',
  name: 'Stalking Fortune Teller',
  text: 'When it enters: deal 3 damage to a random enemy ally. When it attacks: deal 1 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  keywords: ['stealth'],
  attack: 3,
  health: 6,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  onAttack(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject: 'a time-traveling adventurer, the stalking fortune teller, standing guard, hunter style'
  }
})
