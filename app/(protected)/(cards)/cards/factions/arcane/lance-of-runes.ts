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
    subject: 'Lance of Runes: a crackling bolt of energy striking a lone target, medieval magic order style'
  }
})
