import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'orb-of-storms',
  type: 'weapon',
  name: 'Orb of Storms',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'lightning',
  price: 170,
  cost: 3,
  attack: 4,
  durability: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Orb of Storms: a single orb made of rusted iron and chains, crackling with forked lightning, on a mossy rock, centered and seen from slightly below, emerald accents, mage style'
  }
})
