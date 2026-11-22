import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'open-market',
  type: 'ability',
  name: 'Open Market',
  text: 'Each player draws 2 cards.',
  flavor: 'The doors open for everyone. Who profits more is up to you.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 60,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
    draw(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a grand market gate swinging open at dawn, crowds rushing in toward stalls full of treasures'
  }
})
