import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw, spendCharge } from '@/app/(protected)/(engine)/effects'

/** The formation it needs to draw. */
const MIN_ALLIES = 3

export default defineCard({
  id: 'solar-idol',
  type: 'artifact',
  name: 'Solar Idol',
  text: 'At the start of each phase: if you have 3 or more allies, draw a card. (3 uses)',
  flavor: 'It drinks the sun and gives back courage.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length >= MIN_ALLIES) {
      draw(ctx, ctx.owner, 1)
      spendCharge(ctx)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Solar Idol: an ancient idol made of blue steel with silver runes, standing in a misty clearing, bursting toward the viewer, magenta accents, ancient bronze-age empire style'
  }
})
