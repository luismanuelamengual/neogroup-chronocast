import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-astronomer',
  type: 'hero',
  boss: true,
  name: 'The Hollow Astronomer',
  text: 'Collapse Star (3): deal 10 damage to an enemy slot. At the start of each phase, deal 2 damage to the enemy hero.',
  flavor: 'He mapped every star, then started putting them out.',
  faction: 'arcane',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'hollow-astronomer' },
  rarity: 'legendary',
  cost: 0,
  health: 55,
  ability: {
    name: 'Collapse Star',
    text: 'Deal 10 damage to an enemy slot.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 10)
    }
  },
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a tall robed astronomer with an empty hood full of stars instead of a face, holding a cracked brass telescope in a dark observatory'
  }
})
