import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { rechargeRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'torque-wrench',
  type: 'weapon',
  subtype: 'tool',
  name: 'Torque Wrench',
  text: 'When your hero attacks with it: a random artifact of yours with uses gains 1 use.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 3,
  durability: 3,
  onAttack(ctx) {
    rechargeRandom(ctx, 1)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Torque Wrench: a heavy oversized brass wrench with a ticking gauge on its handle, steam hissing from a valve, on an oily workbench, diagonal composition, copper and yellow accents, steampunk steam era style'
  }
})
