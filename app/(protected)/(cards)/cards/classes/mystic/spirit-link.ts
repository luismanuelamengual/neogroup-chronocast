import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-link',
  type: 'ability',
  name: 'Spirit Link',
  text: 'Your allies gain +1 attack and +4 health.',
  flavor: 'One heart, many bodies.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'glowing spirit threads connecting the hearts of several warriors'
  }
})
