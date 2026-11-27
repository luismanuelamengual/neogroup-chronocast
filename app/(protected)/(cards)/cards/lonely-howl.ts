import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lonely-howl',
  type: 'artifact',
  name: 'Lonely Howl',
  text: 'At the start of each phase, if you have no allies: your hero heals 4. (6 uses)',
  flavor: 'Alone, but never quiet.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  charges: 6,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length === 0) {
      healHero(ctx, 4)
      spendCharge(ctx)
    }
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Lonely Howl: a carved bone wolf totem on a lonely hilltop under the moon, faint mist, close-up filling the frame, silver accents, prehistoric jungle era style'
  }
})
