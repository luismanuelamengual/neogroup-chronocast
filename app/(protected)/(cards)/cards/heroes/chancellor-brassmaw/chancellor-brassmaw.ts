import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chancellor-brassmaw',
  type: 'hero',
  name: 'Chancellor Brassmaw',
  text: 'Iron Decree (4): stun an enemy ally and deal 8 sonic damage to it. At the end of each phase, your hero heals 3.',
  flavor: 'He owns the factories, the city and most of the clocks.',
  faction: 'clockwork',
  heroClass: 'mage',
  side: 'eclipse',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'legendary',
  element: 'sonic',
  cost: 0,
  health: 65,
  ability: {
    name: 'Iron Decree',
    text: 'Stun an enemy ally and deal 8 sonic damage to it.',
    cost: 4,
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
      damage(ctx, ctx.targets[0], 8)
    }
  },
  onPhaseEnd(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a fat sinister Victorian chancellor with a brass mechanical jaw, a monocle and a top hat sitting behind a giant desk of gears'
  }
})
