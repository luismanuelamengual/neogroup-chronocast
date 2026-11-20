import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chain-lightning',
  type: 'ability',
  name: 'Chain Lightning',
  text: 'Deal 8 damage to every enemy ally. Slow.',
  flavor: 'It never strikes the same place once.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 8)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a bolt of blue lightning jumping from monster to monster across a dark battlefield'
  }
})
