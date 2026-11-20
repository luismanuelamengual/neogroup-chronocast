import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warlords-command',
  type: 'ability',
  name: "Warlord's Command",
  text: 'Your allies gain +5 attack and +5 health and draw 2 cards.',
  flavor: 'Every soldier knows that voice.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'legendary',
  price: 5250,
  cost: 5,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 5, 5)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['buff', 'draw'] },
  art: {
    subject: 'a warlord on a hill pointing his sword forward while his army roars and charges'
  }
})
