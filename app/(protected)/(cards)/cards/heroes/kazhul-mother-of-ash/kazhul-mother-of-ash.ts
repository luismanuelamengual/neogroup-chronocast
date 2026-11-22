import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kazhul-mother-of-ash',
  type: 'hero',
  name: 'Kazhul, Mother of Ash',
  text: 'Ash Breath (2): deal 3 fire damage to every enemy ally. At the start of each phase, your hero heals 3.',
  flavor: 'She sleeps under the volcano. Nobody wants her awake.',
  faction: 'primal',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'kazhul-mother-of-ash' },
  rarity: 'legendary',
  element: 'fire',
  cost: 0,
  health: 64,
  ability: {
    name: 'Ash Breath',
    text: 'Deal 3 fire damage to every enemy ally.',
    cost: 2,
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 3)
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
