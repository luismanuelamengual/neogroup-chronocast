import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dark-sermon',
  type: 'ability',
  boss: true,
  name: 'Dark Sermon',
  text: 'Deal 6 damage to every enemy ally. Slow.',
  flavor: 'The congregation listens. Forever.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'morgrath-lich-abbot' },
  rarity: 'epic',
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'the lich abbot preaching from a pulpit as violet dark energy washes over the pews'
  }
})
