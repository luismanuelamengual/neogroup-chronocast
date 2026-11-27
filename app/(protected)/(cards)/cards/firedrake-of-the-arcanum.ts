import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firedrake-of-the-arcanum',
  type: 'ally',
  name: 'Firedrake of the Arcanum',
  text: 'When it enters: freeze the enemy ally with the most attack.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'drake',
  keywords: ['ranged'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    const strongest = alliesOf(ctx, ctx.opponent).sort((a, b) => ctx.engine.attackOf(b) - ctx.engine.attackOf(a))[0]

    if (strongest) {
      freezeAlly(ctx, strongest)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Firedrake of the Arcanum: a firedrake with iridescent green-purple scales and tattered wings, prowling low, ivory accents, mage style'
  }
})
