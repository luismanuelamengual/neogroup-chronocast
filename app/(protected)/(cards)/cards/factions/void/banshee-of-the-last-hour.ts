import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-the-last-hour',
  type: 'ally',
  name: 'Banshee of the Last Hour',
  text: 'When it enters: if your discard pile has 6 or more cards, it gains +2 attack and +2 health.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 70,
  cost: 5,
  tribe: 'undead',
  keywords: ['poison'],
  attack: 4,
  health: 11,
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 6) {
      buffSelf(ctx, 2, 2)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'an undead creature, the banshee of the last hour, mid-leap, dark end-of-time void style'
  }
})
