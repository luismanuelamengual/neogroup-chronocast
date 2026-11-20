import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'black-grimoire',
  type: 'item',
  name: 'Black Grimoire',
  text: 'A random ally of your discard pile returns to play, a random ally of your discard pile returns to play and draw a card.',
  flavor: 'Every page is a door. Every door opens inward.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    reviveFromDiscard(ctx, ctx.owner)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['revive', 'draw'] },
  art: {
    subject: 'a heavy black book bound in chains floating open, green ghostly hands reaching out of its pages'
  }
})
