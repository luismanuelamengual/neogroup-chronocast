import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-raptor',
  type: 'ally',
  name: 'Thundering Raptor',
  text: 'When it dies: summon a Raptor Hatchling.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
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
    subject: 'a dinosaur, the thundering raptor, crouching, ready to strike, prehistoric jungle era style'
  }
})
