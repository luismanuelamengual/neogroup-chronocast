import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chancellor-brassmaw',
  type: 'hero',
  boss: true,
  name: 'Chancellor Brassmaw',
  text: 'Iron Decree (3): stun an enemy ally and deal 6 damage to it. At the end of each phase, your hero gains 3 armor.',
  flavor: 'He owns the factories, the city and most of the clocks.',
  faction: 'clockwork',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'legendary',
  cost: 0,
  health: 60,
  ability: {
    name: 'Iron Decree',
    text: 'Stun an enemy ally and deal 6 damage to it.',
    cost: 3,
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
      damage(ctx, ctx.targets[0], 6)
    }
  },
  onPhaseEnd(ctx) {
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a fat sinister Victorian chancellor with a brass mechanical jaw, a monocle and a top hat sitting behind a giant desk of gears'
  }
})
