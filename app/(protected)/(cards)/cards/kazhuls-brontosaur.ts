import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kazhuls-brontosaur',
  type: 'ally',
  name: "Kazhul's Brontosaur",
  text: 'When it enters: your other Saurians gain +2 attack and +2 health. At the start of each phase: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { heroes: ['kazhul-mother-of-ash'] },
  rarity: 'legendary',
  weak: ['ice'],
  price: 5600,
  cost: 5,
  tribe: 'saurian',
  keywords: ['guardian', 'unique'],
  attack: 4,
  health: 12,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'saurian', 2, 2, true)
  },
  onPhaseStart(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 7, tags: ['buff', 'tribe'] },
  art: {
    subject:
      "Kazhul's Brontosaur: a brontosaur with a charcoal hide with glowing orange cracks and moss growing on its back, prowling low, crimson accents, prehistoric jungle era style"
  }
})
