import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'war-banner',
  type: 'item',
  name: 'War Banner',
  text: 'Your allies gain +1 attack and +3 health.',
  flavor: 'Follow the red.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 3)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a tattered red war banner flapping on a spear over a battlefield'
  }
})
