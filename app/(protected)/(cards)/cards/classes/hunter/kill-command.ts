import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kill-command',
  type: 'ability',
  name: 'Kill Command',
  text: 'Deal 12 damage to an enemy ally and an ally of yours gains +4 attack this phase.',
  flavor: 'Sic it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['enemyAlly', 'friendlyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
    buffThisPhaseAt(ctx, ctx.targets[1], 4)
  },
  ai: { value: 3, tags: ['removal', 'buff'] },
  art: {
    subject: 'a hunter pointing forward as her wolf leaps toward a monster'
  }
})
