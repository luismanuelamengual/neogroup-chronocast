import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { draw } from '@/app/(protected)/(engine)/effects'

/** The most cards it draws. */
const MAX_DRAW = 3

export default defineCard({
  id: 'form-ranks',
  type: 'ability',
  subtype: 'tactic',
  name: 'Form Ranks',
  text: 'Draw a card for each pair of allies of yours next to each other (up to 3).',
  flavor: 'Shoulder to shoulder, the legion thinks as one.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    let pairs = 0

    for (let slot = 0; slot < ALLY_SLOTS - 1; slot++) {
      if (ctx.engine.unitAt(ctx.owner, slot) && ctx.engine.unitAt(ctx.owner, slot + 1)) {
        pairs++
      }
    }

    draw(ctx, ctx.owner, Math.min(MAX_DRAW, pairs))
  },
  ai: { value: 3, tags: ['draw', 'formation'] },
  art: {
    subject:
      'Form Ranks: a row of bronze-armored legionnaires locking their round shields together in a perfect line, red crests, golden sunlight on the shields, ancient bronze-age empire style'
  }
})
