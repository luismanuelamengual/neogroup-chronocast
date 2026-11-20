import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fireball',
  type: 'ability',
  name: 'Fireball',
  text: 'Deal 18 damage to an enemy slot. Slow.',
  flavor: 'The oldest spell in every era.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 65,
  cost: 3,
  speed: 'slow',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 18)
  },
  ai: { value: 3, tags: ['removal', 'burn'] },
  art: { subject: 'a huge roaring fireball flying through the air, leaving a trail of sparks and smoke' }
})
