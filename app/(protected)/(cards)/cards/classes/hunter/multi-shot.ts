import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'multi-shot',
  type: 'ability',
  name: 'Multi-Shot',
  text: 'Deal 6 damage to a random enemy ally and deal 6 damage to a random enemy ally. Fast.',
  flavor: 'Why choose?',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'an archer firing three glowing arrows at once in a fan'
  }
})
