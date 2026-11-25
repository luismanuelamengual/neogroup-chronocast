import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-merchant',
  type: 'ally',
  name: 'Weary Merchant',
  text: 'When it dies: draw a card.',
  flavor: 'He has sold everything except his rest.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  attack: 6,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Weary Merchant: a towering adult woman with freckled fair skin, blue-black hair in a high ponytail and war paint stripes, wearing a straw hat, dressed in a monk robe with a futuristic utility belt, balancing a scale heaped with glowing trinkets, with wide-eyed wonder, ivory accents, time rift wanderer style'
  }
})
