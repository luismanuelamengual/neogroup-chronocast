import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-secret',
  type: 'ability',
  name: 'Blessed Secret',
  text: 'Draw a card and your hero heals 3.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Blessed Secret: a sealed envelope with a glowing wax seal, half hidden in shadow, over rooftops at night, bursting toward the viewer, gold accents, mystic healer style'
  }
})
