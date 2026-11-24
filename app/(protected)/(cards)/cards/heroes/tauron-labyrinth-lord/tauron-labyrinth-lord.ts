import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tauron-labyrinth-lord',
  type: 'hero',
  name: 'Tauron, Lord of the Labyrinth',
  text: 'Gore (4): deal 12 earth damage to an enemy slot. At the start of each phase, your hero heals 2.',
  flavor: 'Nobody who enters his maze has found the way out.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
  rarity: 'legendary',
  element: 'earth',
  cost: 0,
  health: 61,
  ability: {
    name: 'Gore',
    text: 'Deal 12 earth damage to an enemy slot.',
    cost: 4,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic bull-headed warrior with bronze armor and a huge double axe standing in the center of a stone labyrinth'
  }
})
