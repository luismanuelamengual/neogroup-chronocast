import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-astronomer',
  type: 'hero',
  name: 'The Hollow Astronomer',
  text: 'Collapse Star (6): deal 16 arcane damage to an enemy slot. At the start of each phase, deal 2 arcane damage to the enemy hero.',
  flavor: 'He mapped every star, then started putting them out.',
  faction: 'arcane',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'hollow-astronomer' },
  rarity: 'legendary',
  element: 'arcane',
  cost: 0,
  health: 60,
  ability: {
    name: 'Collapse Star',
    text: 'Deal 16 arcane damage to an enemy slot.',
    cost: 6,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 16)
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
