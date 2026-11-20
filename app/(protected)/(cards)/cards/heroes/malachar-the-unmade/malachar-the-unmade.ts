import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardSize, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'malachar-the-unmade',
  type: 'hero',
  name: 'Malachar the Unmade',
  text: 'Unmake (2): deal 8 damage to an enemy slot. If your discard pile has 6 or more cards, your hero heals 4. At the start of each phase, if your discard pile has 8 or more cards, deal 2 damage to the enemy hero.',
  flavor: 'He unmade himself to see what lies beyond time.',
  faction: 'void',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'legendary',
  cost: 0,
  health: 100,
  ability: {
    name: 'Unmake',
    text: 'Deal 8 damage to an enemy slot. If your discard pile has 6 or more cards, your hero heals 4.',
    cost: 2,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)

      if (discardSize(ctx, ctx.owner) >= 6) {
        heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
      }
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
