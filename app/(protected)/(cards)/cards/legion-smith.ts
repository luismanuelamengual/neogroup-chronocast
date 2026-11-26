import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairGear } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legion-smith',
  type: 'ally',
  name: 'Legion Smith',
  text: 'When it enters: your weapon and armor gain +1 durability each.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  tribe: 'legionnaire',
  attack: 3,
  health: 4,
  onEnter(ctx) {
    repairGear(ctx, ctx.owner, 1)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Legion Smith: a burly legionary blacksmith with a leather apron hammering a bronze helmet on an anvil, sparks flying, field camp forge, full body, crimson accents, ancient bronze-age empire style'
  }
})
