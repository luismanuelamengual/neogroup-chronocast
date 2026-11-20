import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'counter-rune',
  type: 'trap',
  name: 'Counter Rune',
  text: 'When the enemy hero uses its ability: cancel it.',
  flavor: 'Nice spell. Shame about the ending.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  trigger: 'enemyAbility',
  onTrigger(ctx, event) {
    event.cancel()
  },
  ai: { value: 2, tags: ['trap', 'control'] },
  art: {
    subject: 'a glowing defensive rune circle shattering an incoming spell into harmless sparks'
  }
})
