import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-static',
  type: 'hero',
  boss: true,
  name: 'Queen Static',
  text: 'Feedback (2): deal 8 damage to an enemy slot. Fast. At the end of each phase, deal 2 damage to the enemy hero.',
  flavor: 'She lives in the noise between channels.',
  faction: 'neon',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'legendary',
  cost: 0,
  health: 112,
  ability: {
    name: 'Feedback',
    text: 'Deal 8 damage to an enemy slot.',
    cost: 2,
    speed: 'fast',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)
    }
  },
  onPhaseEnd(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 0 },
  art: {
    subject: 'a glitching digital queen made of static and neon light sitting on a throne of broken screens'
  }
})
