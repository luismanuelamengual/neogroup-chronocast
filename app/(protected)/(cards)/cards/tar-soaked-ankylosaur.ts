import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-soaked-ankylosaur',
  type: 'ally',
  name: 'Tar-Soaked Ankylosaur',
  text: 'When it enters: your other Saurians heal 4.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  element: 'acid',
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'saurian',
  attack: 5,
  health: 9,
  onEnter(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'saurian', true)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 4)
      }
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Tar-Soaked Ankylosaur: an ankylosaur with a rust-red hide with black spots and moss growing on its back, circling warily, teal accents, prehistoric jungle era style'
  }
})
