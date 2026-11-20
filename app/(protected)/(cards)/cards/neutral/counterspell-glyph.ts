import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'counterspell-glyph',
  type: 'trap',
  name: 'Counterspell Glyph',
  text: 'When the enemy hero uses its ability: cancel it.',
  flavor: 'Not today. Not in any era.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  trigger: 'enemyAbility',
  onTrigger(_ctx, event) {
    event.cancel()
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'a glowing turquoise glyph on the ground absorbing a beam of magic'
  }
})
