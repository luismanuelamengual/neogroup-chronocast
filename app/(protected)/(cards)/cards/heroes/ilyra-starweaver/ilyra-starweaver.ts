import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ilyra-starweaver',
  type: 'hero',
  name: 'Ilyra Starweaver',
  text: 'Arcane Bolt (2): deal 12 damage to an enemy slot.',
  flavor: 'She reads the future in the constellations, then rewrites it.',
  faction: 'arcane',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'common',
  cost: 0,
  health: 100,
  ability: {
    name: 'Arcane Bolt',
    text: 'Deal 12 damage to an enemy slot.',
    cost: 2,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a young elven archmage with silver hair and a deep blue robe embroidered with stars, weaving glowing constellation threads between her hands on a tower balcony at night'
  }
})
