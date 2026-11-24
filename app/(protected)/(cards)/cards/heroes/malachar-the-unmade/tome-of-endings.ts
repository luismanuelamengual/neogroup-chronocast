import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tome-of-endings',
  type: 'item',
  reward: true,
  name: 'Tome of Endings',
  text: 'Deal 5 shadow damage to every enemy ally, a random ally of your discard pile returns to play and draw 2 cards.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'mythic',
  element: 'shadow',
  cost: 4,
  keywords: ['unique'],
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 5)
    reviveFromDiscard(ctx, ctx.owner)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['draw', 'removal', 'revive'] },
  art: {
    subject:
      'Tome of Endings: a small tome made of dark yew wood and brass fittings, wrapped in swirling black smoke, on a fur rug, bursting toward the viewer, teal accents'
  }
})
