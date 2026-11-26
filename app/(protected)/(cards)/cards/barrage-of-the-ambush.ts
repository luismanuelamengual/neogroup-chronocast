import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-ambush',
  type: 'ability',
  subtype: 'tactic',
  name: 'Barrage of the Ambush',
  text: 'Deal 12 damage to an enemy slot.',
  flavor: 'The trees themselves let fly.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'legendary',
  price: 2240,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Barrage of the Ambush: a dense volley of projectiles raining down, inside a cave of crystals, framed by drifting embers, scarlet accents, hunter style'
  }
})
