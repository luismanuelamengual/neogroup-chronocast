import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-static',
  type: 'hero',
  name: 'Queen Static',
  text: 'Feedback (3): deal 8 lightning damage to an enemy slot. Fast. At the end of each phase, deal 2 lightning damage to the enemy hero.',
  flavor: 'She lives in the noise between channels.',
  faction: 'neon',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'legendary',
  element: 'lightning',
  cost: 0,
  health: 61,
  ability: {
    name: 'Feedback',
    text: 'Deal 8 lightning damage to an enemy slot.',
    cost: 3,
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
