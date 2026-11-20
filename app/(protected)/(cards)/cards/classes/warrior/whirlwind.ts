import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'whirlwind',
  type: 'ability',
  name: 'Whirlwind',
  text: 'Deal 7 damage to every enemy ally. Slow.',
  flavor: 'Stand back. Further. Further.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 7)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a warrior spinning with two swords in a red whirlwind of steel, enemies thrown back'
  }
})
