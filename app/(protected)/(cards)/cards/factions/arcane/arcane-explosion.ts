import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-explosion',
  type: 'ability',
  name: 'Arcane Explosion',
  text: 'Deal 20 damage to an enemy slot and deal 6 damage to every enemy ally. Slow.',
  flavor: 'The tower lost a wall. The enemy lost everything.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  speed: 'slow',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 20)
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: "a massive violet magical explosion bursting from a wizard's staff, shockwave tearing the ground"
  }
})
