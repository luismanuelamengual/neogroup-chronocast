import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-basilisk',
  type: 'ally',
  name: 'Ethereal Basilisk',
  text: 'When it enters: deal 3 earth damage to the enemy ally with the most health.',
  flavor: 'Its gaze passes through walls.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'arcane',
  resist: ['fire'],
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'drake',
  keywords: ['shield'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    const toughest = alliesOf(ctx, ctx.opponent).sort((a, b) => b.health - a.health)[0]

    if (toughest) {
      damageAlly(ctx, toughest, 3, 'earth')
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Ethereal Basilisk: a basilisk with golden scales and a frilled neck, leaping forward, rose pink accents, mage style'
  }
})
