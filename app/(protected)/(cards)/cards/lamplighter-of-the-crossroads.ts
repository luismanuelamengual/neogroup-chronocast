import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-the-crossroads',
  type: 'ally',
  name: 'Lamplighter of the Crossroads',
  text: 'When it dies: summon a Rift Spark. When it enters: your hero heals 4.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1000,
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
    subject:
      'Lamplighter of the Crossroads: a petite middle-aged lizardfolk man with olive scales, mutton chops and a crooked broken nose, wearing a feathered cap, dressed in a sailor uniform with bronze greaves, raising a lantern on a long pole, with a mischievous wink, turquoise accents, time rift wanderer style'
  }
})
