import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-the-crossroads',
  type: 'ally',
  name: 'Mercenary of the Crossroads',
  text: 'When it enters: the enemy weapon loses 1 durability.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  tribe: 'drifter',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
  },
  ai: { value: 5, tags: ['antiGear'] },
  art: {
    subject: 'a time-traveling wanderer, the mercenary of the crossroads, standing guard, time rift wanderer style'
  }
})
