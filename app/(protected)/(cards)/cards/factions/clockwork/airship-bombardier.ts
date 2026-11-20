import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'airship-bombardier',
  type: 'ally',
  name: 'Airship Bombardier',
  text: 'On enter: deal 6 damage to a random enemy ally.',
  flavor: 'Bombs away! Mostly away.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 12,
  health: 20,
  keywords: ['flying'],
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a goggled bombardier leaning out of a small airship gondola dropping round black bombs over a city'
  }
})
