import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-pyre',
  type: 'ability',
  subtype: 'spell',
  name: 'Dreaming Pyre',
  text: 'Burn every enemy ally (1) for 3 phases.',
  flavor: 'It burns with the colors of dreams.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  onPlay(ctx) {
    for (const ref of allyRefs(ctx, ctx.opponent)) {
      burn(ctx, ref, 1, 3)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Dreaming Pyre: a roaring funeral pyre of tall flames, in a dark forest clearing, bursting toward the viewer, turquoise accents, mystic healer style'
  }
})
