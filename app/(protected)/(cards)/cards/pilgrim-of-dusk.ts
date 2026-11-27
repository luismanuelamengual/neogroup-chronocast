import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-dusk',
  type: 'ally',
  name: 'Pilgrim of Dusk',
  text: 'When it enters: the enemy discards a random card and your hero takes 3 shadow damage.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  element: 'shadow',
  price: 50,
  cost: 2,
  keywords: ['shield'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    discardRandom(ctx, ctx.opponent)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 3, 'shadow')
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Pilgrim of Dusk: a wiry elderly foxfolk woman with charcoal grey hair in an undercut and a golden nose ring, wearing a knotted bandana, dressed in a kimono with brass shoulder plates, holding prayer beads and a staff, with a sly grin, indigo accents, time rift wanderer style'
  }
})
