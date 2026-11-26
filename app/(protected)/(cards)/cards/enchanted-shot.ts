import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-shot',
  type: 'ability',
  name: 'Enchanted Shot',
  text: 'Deal 12 arcane damage to an enemy ally.',
  flavor: 'The arrow knows the way.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'rare',
  element: 'arcane',
  price: 480,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Enchanted Shot: a single arrow in flight trailing a streak of light, circled by glowing violet runes, over burning grassland, swirling around the center, tangerine accents, medieval magic order style'
  }
})
