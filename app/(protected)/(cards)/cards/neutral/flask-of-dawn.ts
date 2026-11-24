import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flask-of-dawn',
  type: 'item',
  name: 'Flask of Dawn',
  text: 'Draw the first Elemental of your deck and draw the first Elemental of your deck.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'elemental')
    seekTribe(ctx, ctx.owner, 'elemental')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Flask of Dawn: a small flask made of crystal and silver filigree, on a workbench with tools, centered and seen from slightly below, lime green accents, time rift wanderer style'
  }
})
