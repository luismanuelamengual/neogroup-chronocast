import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-cartographer',
  type: 'ally',
  name: 'Old Cartographer',
  text: 'When it dies: summon a Rift Spark.',
  flavor: 'He drew the Rift before it opened.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 420,
  cost: 3,
  keywords: ['flying'],
  attack: 4,
  health: 6,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Old Cartographer: a plump adult catfolk man with platinum blond hair long and straight, a forked beard and a gap-toothed grin, dressed in a monk robe with a futuristic utility belt, unrolling a living map of shifting lands, with grim determination, emerald accents, time rift wanderer style'
  }
})
