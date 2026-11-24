import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lance-of-runes',
  type: 'ability',
  name: 'Lance of Runes',
  text: 'Deal 9 arcane damage to an enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  element: 'arcane',
  price: 570,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Lance of Runes: a long lance of pure energy piercing the air, circled by glowing violet runes, over burning grassland, seen from above, teal accents, medieval magic order style'
  }
})
