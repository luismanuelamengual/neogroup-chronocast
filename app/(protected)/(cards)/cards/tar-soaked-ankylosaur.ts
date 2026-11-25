import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-soaked-ankylosaur',
  type: 'ally',
  name: 'Tar-Soaked Ankylosaur',
  text: 'When it enters: it gains +1 attack and +2 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  element: 'acid',
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'saurian',
  attack: 5,
  health: 9,
  onEnter(ctx) {
    buffSelf(ctx, 1, 2)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Tar-Soaked Ankylosaur: an ankylosaur with a rust-red hide with black spots and moss growing on its back, circling warily, teal accents, prehistoric jungle era style'
  }
})
