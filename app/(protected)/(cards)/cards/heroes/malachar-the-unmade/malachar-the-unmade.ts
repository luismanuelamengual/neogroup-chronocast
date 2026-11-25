import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { addBoon, damage, discardSize, poisonAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'malachar-the-unmade',
  type: 'hero',
  name: 'Malachar the Unmade',
  text: 'Plague of the Void (4): poison 5 every enemy ally. Until the end of the next phase, your allies cost 1 Chronos less. At the start of each phase, if your discard pile has 8 or more cards, deal 2 shadow damage to the enemy hero.',
  flavor: 'He unmade himself to see what lies beyond time.',
  faction: 'void',
  heroClass: 'mage',
  side: 'eclipse',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 55,
  ability: {
    name: 'Plague of the Void',
    text: 'Poison 5 every enemy ally. Until the end of the next phase, your allies cost 1 Chronos less.',
    cost: 4,
    ai: { tags: ['allyDiscount'] },
    activate(ctx) {
      poisonAllAllies(ctx, ctx.opponent, 5)
      addBoon(ctx, ctx.owner, 'allyDiscount', 1)
    }
  },
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 8) {
      damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a dark sorcerer whose body dissolves into black particles and green void energy, a hollow crown floating above his head among floating ruins'
  }
})
