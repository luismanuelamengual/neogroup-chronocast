import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nightmare-of-the-abyss',
  type: 'ally',
  name: 'Nightmare of the Abyss',
  text: 'When it enters: poison the enemy hero (3).',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 55,
  cost: 3,
  tribe: 'horror',
  attack: 4,
  health: 5,
  onEnter(ctx) {
    poison(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Nightmare of the Abyss: a nightmare with bone-white chitin and a mouth full of tentacles, roaring with jaws wide open, saffron yellow accents, dark end-of-time void style'
  }
})
