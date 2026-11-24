import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-secret',
  type: 'ability',
  name: 'Brave Secret',
  text: 'Draw 2 cards.',
  flavor: 'Courage is easier when nobody knows.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'legendary',
  price: 4800,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Brave Secret: a sealed envelope with a glowing wax seal, half hidden in shadow, against a starry sky, framed by drifting embers, cobalt blue accents, warrior style'
  }
})
