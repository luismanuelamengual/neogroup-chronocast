import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ooma-bonewhisper',
  type: 'hero',
  name: 'Ooma Bonewhisper',
  text: 'Ancestral Growth (2): an ally of yours gains +2 attack and +3 health. At the start of each phase, your allies heal 2.',
  flavor: 'The bones of the ancestors speak. She listens.',
  faction: 'primal',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'epic',
  cost: 0,
  health: 95,
  ability: {
    name: 'Ancestral Growth',
    text: 'An ally of yours gains +2 attack and +3 health.',
    cost: 2,
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 2, 3)
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
