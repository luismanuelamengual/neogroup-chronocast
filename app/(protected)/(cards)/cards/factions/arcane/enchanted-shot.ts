import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-shot',
  type: 'ability',
  name: 'Enchanted Shot',
  text: 'Deal 12 arcane damage to an enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  element: 'arcane',
  price: 630,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'Enchanted Shot: a crackling bolt of energy striking a lone target, medieval magic order style'
  }
})
