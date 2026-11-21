import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

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
  attack: 6,
  health: 20,
  ability: {
    name: 'Nanobots',
    text: 'An ally of yours heals 8.',
    cost: 1,
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 8)
    }
  },
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['ability', 'heal'] },
  art: {
    subject: 'a medic with chrome arms spraying a glowing cloud of healing nanobots over a wounded soldier'
  }
})
