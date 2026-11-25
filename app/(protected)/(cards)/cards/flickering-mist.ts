import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-mist',
  type: 'ally',
  name: 'Flickering Mist',
  text: 'When it enters: it gains +1 attack and +1 health for each other Elemental of yours.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 510,
  cost: 2,
  tribe: 'elemental',
  keywords: ['flying'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'elemental', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Flickering Mist: an elemental mist with a hunched beast shape made of silver wind streams, baring its teeth, mage style'
  }
})
