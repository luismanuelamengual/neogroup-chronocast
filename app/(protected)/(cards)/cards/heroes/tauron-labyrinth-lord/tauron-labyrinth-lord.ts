import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tauron-labyrinth-lord',
  type: 'hero',
  boss: true,
  name: 'Tauron, Lord of the Labyrinth',
  text: 'Gore (3): deal 12 damage to an enemy slot. At the start of each phase, your hero gains 2 armor.',
  flavor: 'Nobody who enters his maze has found the way out.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
  rarity: 'legendary',
  cost: 0,
  health: 56,
  ability: {
    name: 'Gore',
    text: 'Deal 12 damage to an enemy slot.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
    }
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic bull-headed warrior with bronze armor and a huge double axe standing in the center of a stone labyrinth'
  }
})
