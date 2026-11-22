import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blast-of-the-arcanum',
  type: 'ability',
  name: 'Blast of the Arcanum',
  text: 'Deal 9 arcane damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'arcane',
  price: 570,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Blast of the Arcanum: a crackling bolt of energy striking a lone target, mage style'
  }
})
