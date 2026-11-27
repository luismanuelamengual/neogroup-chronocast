import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-ambush',
  type: 'ability',
  subtype: 'tactic',
  name: 'Barrage of the Ambush',
  text: 'Deal 6 damage to an enemy ally and 3 damage to each ally next to it.',
  flavor: 'The trees themselves let fly.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'legendary',
  price: 2240,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const target = ctx.targets[0]

    damage(ctx, target, 6)

    for (const ref of slotsNextTo(ctx, target)) {
      damage(ctx, ref, 3)
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Barrage of the Ambush: a dense volley of projectiles raining down, inside a cave of crystals, framed by drifting embers, scarlet accents, hunter style'
  }
})
