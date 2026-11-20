import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'void-rift',
  type: 'ability',
  name: 'Void Rift',
  text: 'Deal 6 damage to every enemy ally and a random ally of your discard pile returns to play. Slow.',
  flavor: 'The void opens. Something steps out.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 4, tags: ['removal', 'revive'] },
  art: {
    subject: 'a huge tear in space opening over a battlefield, dark tendrils reaching out'
  }
})
