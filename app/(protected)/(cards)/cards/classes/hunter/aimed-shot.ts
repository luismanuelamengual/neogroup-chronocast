import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aimed-shot',
  type: 'ability',
  name: 'Aimed Shot',
  text: 'Deal 10 damage to an enemy slot.',
  flavor: 'Breathe in. Breathe out. Release.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'an archer holding a perfect aim with a drawn bow, focus lines toward a target'
  }
})
