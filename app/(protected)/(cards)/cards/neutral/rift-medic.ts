import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-medic',
  type: 'ally',
  name: 'Rift Medic',
  text: 'At the end of each phase, your allies heal 4.',
  flavor: 'She patches wounds that have not happened yet.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 10,
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a calm field medic with a satchel of glowing bandages, healing a wounded soldier'
  }
})
