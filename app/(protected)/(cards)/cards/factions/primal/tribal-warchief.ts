import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tribal-warchief',
  type: 'ally',
  name: 'Tribal Warchief',
  text: '',
  flavor: 'His war cry can start an avalanche.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 18,
  health: 36,
  ability: {
    name: 'War Cry',
    text: 'An ally of yours gains +8 attack this phase.',
    cost: 2,
    speed: 'fast',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffThisPhaseAt(ctx, ctx.targets[0], 8)
    }
  },
  ai: { value: 6, tags: ['ability'] },
  art: {
    subject: 'a massive tribal warchief in a mammoth-skull helmet holding a huge stone axe, warriors behind him'
  }
})
