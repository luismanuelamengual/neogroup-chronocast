import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-wanderer',
  type: 'ally',
  name: 'Restless Wanderer',
  text: 'At the start of each phase: a random ally of yours heals 3.',
  flavor: 'Sleeping is for people with only one century.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  keywords: ['flying'],
  attack: 6,
  health: 7,
  onPhaseStart(ctx) {
    const unit = randomAlly(ctx, ctx.owner)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      heal(ctx, ref, 3)
    }
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Restless Wanderer: a barrel-chested middle-aged man with freckled fair skin, auburn hair in an afro, a pointed goatee and round spectacles, wearing a straw hat, dressed in desert robes with an aviator scarf, leaning on a carved walking staff, with a haunted stare, emerald accents, time rift wanderer style'
  }
})
