import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardAtPhaseEnd } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-static',
  type: 'hero',
  name: 'Queen Static',
  text: 'Interference (4): at the end of this phase, the rival discards 2 random cards. At the end of each phase, deal 2 lightning damage to the enemy hero.',
  flavor: 'She lives in the noise between channels.',
  faction: 'neon',
  heroClass: 'hunter',
  side: 'eclipse',
  restriction: { heroes: ['queen-static'] },
  rarity: 'legendary',
  element: 'lightning',
  cost: 0,
  health: 61,
  ability: {
    name: 'Interference',
    text: 'At the end of this phase, the rival discards 2 random cards.',
    cost: 4,
    activate(ctx) {
      discardAtPhaseEnd(ctx, ctx.opponent, 2)
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
