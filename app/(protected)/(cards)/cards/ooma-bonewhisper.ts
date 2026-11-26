import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ooma-bonewhisper',
  type: 'hero',
  name: 'Ooma Bonewhisper',
  text: 'Ancestral Growth (4): an ally of yours gains +5 attack and +6 health. At the start of each phase, your allies heal 2.',
  flavor: 'The bones of the ancestors speak. She listens.',
  faction: 'primal',
  side: 'eclipse',
  restriction: { heroes: ['ooma-bonewhisper'] },
  rarity: 'epic',
  cost: 0,
  health: 53,
  ability: {
    name: 'Ancestral Growth',
    text: 'An ally of yours gains +5 attack and +6 health.',
    cost: 4,
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 5, 6)
    }
  },
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'an old tribal shaman woman with bone jewelry and a mammoth skull staff, green spirit light swirling around her in a prehistoric jungle'
  }
})
