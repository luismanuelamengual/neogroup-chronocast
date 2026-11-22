import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firedrake-of-the-arcanum',
  type: 'ally',
  name: 'Firedrake of the Arcanum',
  text: 'When it enters: freeze a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
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
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      freeze(ctx, ref)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a dragon-kin creature, the firedrake of the arcanum, standing guard, mage style'
  }
})
