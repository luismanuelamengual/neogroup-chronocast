import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'signifer-lucius',
  type: 'ally',
  reward: true,
  name: 'Signifer Lucius',
  text: 'When it enters: your other allies gain +1 attack and +2 health.',
  faction: 'bronze',
  restriction: { heroes: ['legate-varro'] },
  rarity: 'epic',
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian', 'retaliate'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 1, 2, true)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a loyal Roman standard bearer in a lion pelt holding a legion standard high'
  }
})
