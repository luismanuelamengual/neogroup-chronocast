import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, mindControl } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overseer-kade',
  type: 'hero',
  name: 'Overseer Kade',
  text: 'Mind Control (4): take control of an enemy ally until the end of the phase: it attacks another enemy ally or the enemy hero, and then it is stunned until the end of the next phase. At the start of each phase, your hero heals 2.',
  flavor: 'He sees every camera in the megacity. All at once.',
  faction: 'neon',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'legendary',
  cost: 0,
  health: 63,
  ability: {
    name: 'Mind Control',
    text: 'Take control of an enemy ally until the end of the phase: it attacks another enemy ally or the enemy hero, and then it is stunned until the end of the next phase.',
    cost: 4,
    targets: ['enemyAlly', 'enemySlot'],
    canActivate(ctx) {
      const [controlled, target] = ctx.targets
      const unit = ctx.engine.targetUnit(controlled)

      if (target.player === controlled.player && target.slot === controlled.slot) {
        return 'invalidTarget'
      }

      return unit && ctx.engine.isStunned(unit) ? 'stunned' : null
    },
    activate(ctx) {
      mindControl(ctx, ctx.targets[0], ctx.targets[1])
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cold corporate overseer in a white suit with cybernetic eyes, hundreds of holographic camera feeds around him in a tower'
  }
})
