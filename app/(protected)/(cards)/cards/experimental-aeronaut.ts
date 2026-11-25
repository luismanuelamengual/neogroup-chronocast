import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'experimental-aeronaut',
  type: 'ally',
  name: 'Experimental Aeronaut',
  text: 'When it enters: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  weak: ['wind'],
  price: 55,
  cost: 3,
  tribe: 'skyship',
  keywords: ['shield'],
  attack: 2,
  health: 8,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Experimental Aeronaut: an aeronaut built of gunmetal with orange hazard stripes, with a cracked glass dome, firing steam, steampunk steam era style'
  }
})
