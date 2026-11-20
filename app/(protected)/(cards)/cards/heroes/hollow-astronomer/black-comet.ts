import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'black-comet',
  type: 'ability',
  boss: true,
  name: 'Black Comet',
  text: 'Deal 9 damage to every enemy ally. Slow.',
  flavor: 'It does not shine. It only falls.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'hollow-astronomer' },
  rarity: 'epic',
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 9)
  },
  ai: { value: 5, tags: ['removal'] },
  art: { subject: 'a pitch black comet with a violet tail crashing down on a battlefield under a starry sky' }
})
