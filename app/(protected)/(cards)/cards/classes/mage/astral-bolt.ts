import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'astral-bolt',
  type: 'ability',
  name: 'Astral Bolt',
  text: 'Deal 6 arcane damage to an enemy slot. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'arcane',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Astral Bolt: a crackling bolt of energy striking a lone target, mage style'
  }
})
