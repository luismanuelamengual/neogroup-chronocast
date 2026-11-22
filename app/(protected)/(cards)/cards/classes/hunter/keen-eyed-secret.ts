import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-secret',
  type: 'ability',
  name: 'Keen-Eyed Secret',
  text: 'Draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'Keen-Eyed Secret: glowing cards and runes swirling out of an open book, hunter style'
  }
})
