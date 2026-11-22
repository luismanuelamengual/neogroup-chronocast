import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'summons-of-steam',
  type: 'ability',
  name: 'Summons of Steam',
  text: 'Summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject: 'Summons of Steam: a glowing portal with a creature stepping through, steampunk steam era style'
  }
})
