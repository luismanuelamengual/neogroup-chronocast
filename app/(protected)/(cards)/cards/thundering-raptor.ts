import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-raptor',
  type: 'ally',
  name: 'Thundering Raptor',
  text: 'When it dies: summon a Raptor Hatchling.',
  flavor: 'Its footsteps sound like a storm.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  weak: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'saurian',
  attack: 3,
  health: 8,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'raptor-hatchling')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Thundering Raptor: a raptor with an olive hide with a crimson crest and a scarred snout, baring its teeth, lime green accents, prehistoric jungle era style'
  }
})
