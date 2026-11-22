import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-called-cartographer',
  type: 'ally',
  name: 'Storm-Called Cartographer',
  text: 'When it dies: deal 1 lightning damage to every enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'lightning',
  price: 155,
  cost: 2,
  attack: 3,
  health: 6,
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a time-traveling adventurer, the storm-called cartographer, crouching, ready to strike, mage style'
  }
})
