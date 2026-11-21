import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-fighter',
  type: 'ally',
  name: 'Net Fighter',
  text: 'On enter: stun a random enemy ally.',
  flavor: 'First the net. Then the trident. Then the applause.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  health: 6,
  onEnter(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 2, tags: ['control'] },
  art: {
    subject: 'a gladiator throwing a weighted net with one hand and holding a trident with the other in the arena'
  }
})
