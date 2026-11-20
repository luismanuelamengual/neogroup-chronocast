import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'signifer-lucius',
  type: 'ally',
  name: 'Signifer Lucius',
  text: 'On enter: your other allies gain +2 attack and +4 health.',
  flavor: 'He has carried the standard through fire, flood and time.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  health: 32,
  keywords: ['guardian'],
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 2, 4, true)
  },
  ai: { value: 5, tags: ['buff', 'defense'] },
  art: {
    subject: 'a loyal Roman standard bearer in a lion pelt holding a legion standard high, Varro behind him'
  }
})
