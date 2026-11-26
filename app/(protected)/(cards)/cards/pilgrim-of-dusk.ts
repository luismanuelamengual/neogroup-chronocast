import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-dusk',
  type: 'ally',
  name: 'Pilgrim of Dusk',
  text: 'When it enters: you gain 1 Chronos this phase.',
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
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Pilgrim of Dusk: a wiry elderly foxfolk woman with charcoal grey hair in an undercut and a golden nose ring, wearing a knotted bandana, dressed in a kimono with brass shoulder plates, holding prayer beads and a staff, with a sly grin, indigo accents, time rift wanderer style'
  }
})
