import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, damageEnemyHero, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kazhul-mother-of-ash',
  type: 'hero',
  name: 'Kazhul, Mother of Ash',
  text: 'Ash Breath (5): deal 5 fire damage to every enemy ally and to the enemy hero. At the start of each phase, your hero heals 3.',
  flavor: 'She sleeps under the volcano. Nobody wants her awake.',
  faction: 'primal',
  heroClass: 'hunter',
  side: 'eclipse',
  restriction: { kind: 'hero', heroId: 'kazhul-mother-of-ash' },
  rarity: 'legendary',
  element: 'fire',
  cost: 0,
  health: 64,
  ability: {
    name: 'Ash Breath',
    text: 'Deal 5 fire damage to every enemy ally and to the enemy hero.',
    cost: 5,
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 5)
      damageEnemyHero(ctx, 5)
    }
  },
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 0 },
  art: {
    subject: 'a colossal ancient dragon of black obsidian scales and lava cracks rising from a volcano crater'
  }
})
