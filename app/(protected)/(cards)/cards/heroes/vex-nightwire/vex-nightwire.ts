import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vex-nightwire',
  type: 'hero',
  name: 'Vex Nightwire',
  text: 'Hack Shot (1): deal 6 damage to an enemy slot. Instant. At the end of each phase, deal 2 damage to the enemy hero.',
  flavor: 'She hunts targets nobody else can find.',
  faction: 'neon',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'rare',
  cost: 0,
  health: 58,
  ability: {
    name: 'Hack Shot',
    text: 'Deal 6 damage to an enemy slot.',
    cost: 1,
    speed: 'instant',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
    }
  },
  onPhaseEnd(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cyberpunk bounty hunter girl with a neon green visor and a holographic crossbow crouching on a rainy rooftop'
  }
})
