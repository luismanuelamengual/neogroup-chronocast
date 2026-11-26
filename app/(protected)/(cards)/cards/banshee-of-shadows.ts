import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { banishFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-shadows',
  type: 'ally',
  name: 'Banshee of Shadows',
  text: 'When it enters: banish the last 3 cards of the enemy discard pile.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 65,
  cost: 4,
  tribe: 'undead',
  attack: 6,
  health: 7,
  onEnter(ctx) {
    banishFromDiscard(ctx, ctx.opponent, 3)
  },
  ai: { value: 4, tags: ['control'] },
  art: {
    subject:
      'Banshee of Shadows: a banshee with rotting green flesh and a broken crown, rearing up, cobalt blue accents, dark end-of-time void style'
  }
})
