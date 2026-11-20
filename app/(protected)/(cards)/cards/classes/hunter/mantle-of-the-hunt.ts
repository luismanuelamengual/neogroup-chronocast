import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mantle-of-the-hunt',
  type: 'armor',
  name: 'Mantle of the Hunt',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally.',
  flavor: 'The prey always feels it first.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'legendary',
  price: 5000,
  cost: 4,
  armor: 20,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: "a dark red hunter's mantle with glowing eyes embroidered on the hood"
  }
})
