import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'learned-wyvern',
  type: 'ally',
  name: 'Learned Wyvern',
  text: 'When another Drake of yours enters: it gains +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  resist: ['fire'],
  weak: ['ice'],
  price: 450,
  cost: 1,
  tribe: 'drake',
  attack: 1,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'drake')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Learned Wyvern: a wyvern with frost-blue scales and a crown of horns, charging head-on, scarlet accents, mage style'
  }
})
