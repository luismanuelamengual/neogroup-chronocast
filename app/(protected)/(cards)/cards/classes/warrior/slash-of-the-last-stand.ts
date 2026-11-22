import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slash-of-the-last-stand',
  type: 'ability',
  name: 'Slash of the Last Stand',
  text: 'Deal 6 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Slash of the Last Stand: a crackling bolt of energy striking a lone target, warrior style'
  }
})
