import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { hasPanoply, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-halo',
  type: 'armor',
  subtype: 'helm',
  name: 'Radiant Halo',
  text: 'At the start of each phase: with Panoply, your hero heals 3.',
  flavor: 'Light that refuses to go out.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  armor: 2,
  durability: 4,
  onPhaseStart(ctx) {
    if (hasPanoply(ctx)) {
      healHero(ctx, 3)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Radiant Halo: a single halo made of ivory and jade, on a mossy rock, diagonal dynamic composition, lime green accents, mystic healer style'
  }
})
