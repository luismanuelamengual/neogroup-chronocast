import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAllAllies, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blizzard',
  type: 'ability',
  name: 'Blizzard',
  text: 'Deal 6 damage to every enemy ally and stun every enemy ally. Slow.',
  flavor: 'Winter came early. And angry.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)

    for (const unit of alliesOf(ctx, ctx.opponent)) {
      stun(ctx, unit)
    }
  },
  ai: { value: 5, tags: ['removal', 'control'] },
  art: {
    subject: 'a raging blizzard of ice and snow freezing a whole battlefield solid'
  }
})
