import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'halo-of-dawn',
  type: 'armor',
  name: 'Halo of Dawn',
  text: 'At the start of each phase, your allies heal 2.',
  flavor: 'Every morning it shines a little brighter.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  armor: 16,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'a glowing golden halo floating above an empty cloak at sunrise'
  }
})
