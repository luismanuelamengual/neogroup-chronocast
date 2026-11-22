import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'triceratops-of-the-herd',
  type: 'ally',
  name: 'Triceratops of the Herd',
  text: 'When it enters: it gains +1 attack and +1 health for each other Saurian of yours.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 170,
  cost: 3,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'saurian', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject: 'a dinosaur, the triceratops of the herd, standing guard, prehistoric jungle era style'
  }
})
