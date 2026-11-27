import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lance-of-runes',
  type: 'ability',
  subtype: 'spell',
  name: 'Lance of Runes',
  text: 'Deal 3 arcane damage to an enemy ally, +2 for each Magus of yours.',
  flavor: 'Each rune adds a reason to hurt.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  element: 'arcane',
  price: 420,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 3 + 2 * tribeAllies(ctx, ctx.owner, 'magus').length, 'arcane')
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Lance of Runes: a long lance of pure energy piercing the air, circled by glowing violet runes, over burning grassland, seen from above, teal accents, medieval magic order style'
  }
})
