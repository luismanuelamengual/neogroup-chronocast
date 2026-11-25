import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'learned-mist',
  type: 'ally',
  name: 'Learned Mist',
  text: 'When it enters: burn a random enemy ally (5).',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 750,
  cost: 7,
  tribe: 'elemental',
  keywords: ['shield'],
  attack: 5,
  health: 13,
  onEnter(ctx) {
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      burn(ctx, ref, 5)
    }
  },
  ai: { value: 8, tags: ['removal'] },
  art: {
    subject:
      'Learned Mist: an elemental mist with a towering pillar shape made of storm purple with yellow lightning, roaring with jaws wide open, mage style'
  }
})
