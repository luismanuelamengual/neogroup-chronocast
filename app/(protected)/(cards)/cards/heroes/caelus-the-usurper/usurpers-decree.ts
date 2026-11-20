import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'usurpers-decree',
  type: 'ability',
  boss: true,
  name: "Usurper's Decree",
  text: 'Deal 12 damage to an enemy ally and 4 to the enemy hero.',
  flavor: 'Signed in ink that has not dried for two thousand years.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
  rarity: 'epic',
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 4)
  },
  ai: { value: 4, tags: ['removal'] },
  art: { subject: 'a burning imperial scroll with a wax seal shaped like a broken hourglass, held by a gloved hand' }
})
