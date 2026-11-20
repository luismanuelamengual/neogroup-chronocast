import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'boiler-burst',
  type: 'ability',
  name: 'Boiler Burst',
  text: 'Deal 8 damage to an enemy ally and gain 1 Chronos.',
  flavor: 'Pressure: too much. Result: excellent.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['removal', 'ramp'] },
  art: {
    subject: "Gideon's mechanical arm venting a huge blast of steam into a monster's face"
  }
})
