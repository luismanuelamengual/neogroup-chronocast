import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poisonAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-data-thief',
  type: 'ally',
  name: 'Venomous Data Thief',
  text: 'When it enters: poison every enemy ally (1).',
  flavor: 'Steals your secrets and leaves a bite.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'acid',
  price: 180,
  cost: 4,
  tribe: 'netrunner',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    poisonAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Venomous Data Thief: a hunched adult man with freckled fair skin, a shaved head, heavy stubble and a golden nose ring, dressed in a cropped jacket with holo patches, pocketing a glowing data chip, with a booming laugh, amber accents, hunter style'
  }
})
