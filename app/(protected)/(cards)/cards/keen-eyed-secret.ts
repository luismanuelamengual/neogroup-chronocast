import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-secret',
  type: 'ability',
  subtype: 'program',
  name: 'Keen-Eyed Secret',
  text: 'Draw a card.',
  flavor: 'The best hunters say nothing.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Keen-Eyed Secret: a sealed envelope with a glowing wax seal, half hidden in shadow, in a dark forest clearing, seen from above, rose pink accents, hunter style'
  }
})
