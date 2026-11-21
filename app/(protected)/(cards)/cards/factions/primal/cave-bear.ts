import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cave-bear',
  type: 'ally',
  name: 'Cave Bear',
  text: 'After it takes damage: it gains +3 attack.',
  flavor: 'Waking it up was the last mistake of many hunters.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 20,
  health: 19,
  onDamaged(ctx) {
    buffSelf(ctx, 3, 0)
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject: 'a huge roaring cave bear standing on its hind legs at the entrance of a cave'
  }
})
