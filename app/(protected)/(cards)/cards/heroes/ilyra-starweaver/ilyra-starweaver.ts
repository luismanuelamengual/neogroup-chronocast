import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ilyra-starweaver',
  type: 'hero',
  name: 'Ilyra Starweaver',
  text: 'Twin Bolts (3): deal 7 arcane damage to 2 different enemy slots.',
  flavor: 'She reads the future in the constellations, then rewrites it.',
  faction: 'arcane',
  heroClass: 'mage',
  side: 'dawn',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'common',
  element: 'arcane',
  cost: 0,
  health: 60,
  ability: {
    name: 'Twin Bolts',
    text: 'Deal 7 arcane damage to 2 different enemy slots.',
    cost: 3,
    targets: ['enemySlot', 'enemySlot'],
    canActivate(ctx) {
      const [first, second] = ctx.targets

      return first.player === second.player && first.slot === second.slot ? 'invalidTarget' : null
    },
    activate(ctx) {
      damage(ctx, ctx.targets[0], 7)
      damage(ctx, ctx.targets[1], 7)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a young elven archmage with silver hair and a deep blue robe embroidered with stars, weaving glowing constellation threads between her hands on a tower balcony at night'
  }
})
