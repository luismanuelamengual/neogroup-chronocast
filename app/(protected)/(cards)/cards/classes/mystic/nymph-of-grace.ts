import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nymph-of-grace',
  type: 'ally',
  name: 'Nymph of Grace',
  text: 'When it enters: your other allies gain +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'light',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 65,
  cost: 4,
  tribe: 'fae',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 0, 2, true)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Nymph of Grace: a nymph with lilac skin and silver hair and a crown of mushrooms, pawing the ground, cobalt blue accents, mystic healer style'
  }
})
