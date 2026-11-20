import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mammoth-skull-staff',
  type: 'weapon',
  name: 'Mammoth Skull Staff',
  text: 'At the start of each phase, your allies heal 2.',
  flavor: 'The mammoth still remembers the ice.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  durability: 3,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'a tall staff topped with a small mammoth skull, feathers and glowing green beads'
  }
})
