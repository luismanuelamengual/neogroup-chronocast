import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stun, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'smoke-bomb',
  type: 'item',
  name: 'Smoke Bomb',
  text: 'Stun an enemy ally.',
  flavor: 'Now you see them, now you wait.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      stun(ctx, unit)
    }
  },
  ai: { value: 1, tags: ['control'] },
  art: {
    subject: 'a small round bomb bursting into a thick cloud of purple smoke'
  }
})
