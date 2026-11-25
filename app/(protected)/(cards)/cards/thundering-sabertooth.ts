import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-sabertooth',
  type: 'ally',
  name: 'Thundering Sabertooth',
  text: 'When it enters: summon a Sabertooth Cub.',
  flavor: 'You hear it before the end.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  tribe: 'beast',
  attack: 6,
  health: 8,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 5, tags: ['summon'] },
  art: {
    subject:
      'Thundering Sabertooth: a sabertooth with black fur with silver tips and huge curved tusks, turning its head toward the viewer, saffron yellow accents, prehistoric jungle era style'
  }
})
