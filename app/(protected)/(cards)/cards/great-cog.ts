import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'great-cog',
  type: 'artifact',
  name: 'Great Cog',
  text: 'While you have 3 or more artifacts: the attacks of your allies deal 1 more damage.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  attackBonus(ctx, attacker) {
    return attacker.slot !== 'hero' && artifactCount(ctx) >= 3 ? 1 : 0
  },
  ai: { value: 2 },
  art: {
    subject:
      'Great Cog: a colossal brass cogwheel slowly turning in the heart of a clock tower, smaller gears meshing around it, shafts of light, copper and yellow accents, steampunk steam era style'
  }
})
