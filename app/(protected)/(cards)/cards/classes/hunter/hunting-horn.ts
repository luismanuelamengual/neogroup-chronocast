import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hunting-horn',
  type: 'item',
  name: 'Hunting Horn',
  text: 'Your allies gain +3 attack. Fast.',
  flavor: 'The hunt begins.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 3, 0)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a carved bone hunting horn with a leather strap, sound waves around it'
  }
})
