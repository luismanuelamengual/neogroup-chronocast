import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volley',
  type: 'ability',
  name: 'Volley',
  text: 'Deal 5 damage to every enemy ally. Slow.',
  flavor: 'The sky goes dark with arrows.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 5)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'hundreds of arrows raining down from the sky over a battlefield'
  }
})
