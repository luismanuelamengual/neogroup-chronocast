import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'insight-of-the-warlord',
  type: 'ability',
  name: 'Insight of the Warlord',
  text: 'Draw the first Legionnaire of your deck and draw the first Legionnaire of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'legionnaire')
    seekTribe(ctx, ctx.owner, 'legionnaire')
  },
  ai: { value: 4, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Insight of the Warlord: a giant glowing eye opening in the sky, against a starry sky, bursting toward the viewer, tangerine accents, warrior style'
  }
})
