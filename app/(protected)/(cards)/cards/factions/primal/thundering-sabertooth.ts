import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-sabertooth',
  type: 'ally',
  name: 'Thundering Sabertooth',
  text: 'When it enters: summon a Sabertooth Cub.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
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
    subject: 'an ice-age beast, the thundering sabertooth, mid-leap, prehistoric jungle era style'
  }
})
