import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, destroy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eclipse-assassin',
  type: 'ally',
  name: 'Eclipse Assassin',
  text: 'When it enters: destroy a random enemy ally that has 4 health or less.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'epic',
  price: 1050,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 6,
  health: 8,
  onEnter(ctx) {
    const weak = alliesOf(ctx, ctx.opponent).filter((unit) => unit.health <= 4)
    const unit = weak[Math.floor(ctx.random() * weak.length)]

    if (unit) {
      destroy(ctx, unit)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Eclipse Assassin: a shadow-cloaked assassin with a blade of black glass under a darkened sun, a fallen guard at their feet, dark ritual mood'
  }
})
