import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-cartographer',
  type: 'ally',
  name: 'Stray Cartographer',
  text: 'When it enters: you gain 1 Chronos this phase.',
  flavor: 'Her maps are wrong, but they are wrong beautifully.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 300,
  cost: 1,
  attack: 2,
  health: 5,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['aggro', 'ramp'] },
  art: {
    subject:
      'Stray Cartographer: a lanky elderly catfolk man with silver hair in a messy bun, mutton chops and a gap-toothed grin, wearing a feathered cap, dressed in a colonial explorer jacket covered in pockets, unrolling a living map of shifting lands, with grim determination, teal accents, time rift wanderer style'
  }
})
