import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aeon-phoenix',
  type: 'ally',
  name: 'Aeon Phoenix',
  text: 'On enter: deal 6 damage to every enemy ally.',
  flavor: 'It has burned at the end of every era, and risen at the start of the next.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5500,
  cost: 6,
  attack: 24,
  health: 18,
  keywords: ['flying', 'echo', 'unique'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 8, tags: ['removal'] },
  art: {
    subject: 'a majestic phoenix with wings of turquoise and gold fire, rising from a burning hourglass'
  }
})
