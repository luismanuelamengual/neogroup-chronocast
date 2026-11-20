import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chrome-medic',
  type: 'ally',
  name: 'Chrome Medic',
  text: 'At the end of each phase, your allies heal 3.',
  flavor: 'Nanobots in, wounds out.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 7,
  health: 22,
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a medic with chrome arms spraying a glowing cloud of healing nanobots over a wounded soldier'
  }
})
