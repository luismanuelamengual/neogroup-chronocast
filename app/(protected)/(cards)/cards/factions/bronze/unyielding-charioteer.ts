import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unyielding-charioteer',
  type: 'ally',
  name: 'Unyielding Charioteer',
  text: 'When it enters: draw the first Legionnaire of your deck.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'legionnaire')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'an ancient bronze-armored soldier, the unyielding charioteer, standing guard, ancient bronze-age empire style'
  }
})
