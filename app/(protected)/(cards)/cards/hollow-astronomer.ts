import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-astronomer',
  type: 'hero',
  name: 'The Hollow Astronomer',
  text: 'Supernova (5): deal 12 arcane damage to an enemy slot and 4 to the slots next to it. At the start of each phase, deal 2 arcane damage to the enemy hero.',
  flavor: 'He mapped every star, then started putting them out.',
  faction: 'arcane',
  heroClass: 'mage',
  side: 'eclipse',
  restriction: { heroes: ['hollow-astronomer'] },
  rarity: 'legendary',
  element: 'arcane',
  cost: 0,
  health: 60,
  ability: {
    name: 'Supernova',
    text: 'Deal 12 arcane damage to an enemy slot and 4 to the slots next to it.',
    cost: 5,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)

      for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
        damage(ctx, ref, 4)
      }
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
