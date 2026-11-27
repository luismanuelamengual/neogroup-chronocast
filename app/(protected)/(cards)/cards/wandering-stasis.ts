import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, cardOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-stasis',
  type: 'ability',
  subtype: 'spell',
  name: 'Wandering Stasis',
  text: "Return every enemy ally that costs 2 or less to its owner's hand.",
  flavor: 'Time pauses to look around.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (cardOf(unit).cost <= 2) {
        returnToHand(ctx, unit)
      }
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Wandering Stasis: a clock frozen inside a floating crystal, its hands stopped, over rooftops at night, framed by drifting embers, amber accents, medieval magic order style'
  }
})
