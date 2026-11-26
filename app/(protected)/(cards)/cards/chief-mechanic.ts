import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { recharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chief-mechanic',
  type: 'ally',
  name: 'Chief Mechanic',
  text: 'When it enters: your artifacts with uses gain 1 use.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  tribe: 'inventor',
  attack: 2,
  health: 4,
  onEnter(ctx) {
    recharge(ctx, 'all', 1)
  },
  ai: { value: 3, tags: ['recharge'] },
  art: {
    subject:
      'Chief Mechanic: a stout goggled mechanic with a mechanical arm tightening bolts on a hissing brass machine, workshop full of gears, full body, copper and yellow accents, steampunk steam era style'
  }
})
