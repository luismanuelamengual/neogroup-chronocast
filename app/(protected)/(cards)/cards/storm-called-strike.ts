import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-called-strike',
  type: 'ability',
  name: 'Storm-Called Strike',
  text: 'Deal 2 lightning damage to an enemy slot, +2 for each Inventor of yours.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 2 + 2 * tribeAllies(ctx, ctx.owner, 'inventor').length)
  },
  ai: { value: 2, tags: ['removal', 'tribe'] },
  art: {
    subject:
      'Storm-Called Strike: a single devastating impact crater with shockwaves, crackling with forked lightning, in a snowy pass, seen from above, indigo accents, mage style'
  }
})
