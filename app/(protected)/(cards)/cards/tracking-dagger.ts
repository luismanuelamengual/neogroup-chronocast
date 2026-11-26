import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-dagger',
  type: 'weapon',
  name: 'Tracking Dagger',
  text: 'When it is equipped: deal 4 damage to a random enemy ally.',
  flavor: 'It points toward its last victim.',
  faction: 'neutral',
  restriction: {},
  rarity: 'epic',
  price: 1100,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Tracking Dagger: a single dagger made of rough stone and sinew, in a beam of light from above, seen from above, emerald accents, hunter style'
  }
})
