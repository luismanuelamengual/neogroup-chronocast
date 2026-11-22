import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-the-crossroads',
  type: 'ally',
  name: 'Lamplighter of the Crossroads',
  text: 'When it dies: summon a Rift Spark. When it enters: your hero heals 4.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  keywords: ['guardian'],
  attack: 2,
  health: 7,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  onEnter(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 3, tags: ['heal', 'summon'] },
  art: {
    subject: 'a time-traveling adventurer, the lamplighter of the crossroads, mid-leap, time rift wanderer style'
  }
})
