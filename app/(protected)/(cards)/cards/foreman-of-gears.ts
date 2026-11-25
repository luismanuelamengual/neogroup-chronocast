import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'foreman-of-gears',
  type: 'ally',
  name: 'Foreman of Gears',
  text: 'When it enters: the enemy weapon loses 1 durability.',
  flavor: 'The machines work harder when he shouts.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
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
    subject:
      'Foreman of Gears: a hunched elderly gnome woman with ruddy skin, charcoal grey hair in an undercut and a crooked broken nose, dressed in a brass-buttoned tailcoat with rolled sleeves, holding a small caged light, bracing for impact, with calm focus, violet accents, steampunk steam era style'
  }
})
