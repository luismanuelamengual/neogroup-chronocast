import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-dagger',
  type: 'weapon',
  name: 'Tracking Dagger',
  text: 'When it is equipped: deal 4 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 4 },
  art: {
    subject: 'Tracking Dagger: a single dagger weapon floating in dramatic light, hunter style'
  }
})
