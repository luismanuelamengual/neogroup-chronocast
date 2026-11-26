import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** Allies in the discard pile for each card. */
const ALLIES_PER_CARD = 3
/** The most cards it draws. */
const MAX_DRAW = 3

export default defineCard({
  id: 'echoes-of-the-pile',
  type: 'ability',
  subtype: 'ritual',
  name: 'Echoes of the Pile',
  text: 'Draw a card for each 3 allies in your discard pile (up to 3).',
  flavor: 'The dead talk. The Void only has to listen.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    const allies = ctx.engine.player(ctx.owner).discard.filter((card) => getCard(card.cardId).type === 'ally').length

    draw(ctx, ctx.owner, Math.min(MAX_DRAW, Math.floor(allies / ALLIES_PER_CARD)))
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Echoes of the Pile: a heap of broken bones and armor glowing with violet light, ghostly faces rising from it as whispering echoes, acid green sparks, dark end-of-time void style'
  }
})
