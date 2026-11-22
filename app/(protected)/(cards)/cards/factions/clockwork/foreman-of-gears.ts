import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'foreman-of-gears',
  type: 'ally',
  name: 'Foreman of Gears',
  text: 'When it enters: the enemy weapon loses 1 durability.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  tribe: 'inventor',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
  },
  ai: { value: 5, tags: ['antiGear'] },
  art: {
    subject: 'a steampunk inventor with goggles, the foreman of gears, raising its weapon, steampunk steam era style'
  }
})
