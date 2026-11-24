import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dire-wolf-of-the-fang',
  type: 'ally',
  name: 'Dire Wolf of the Fang',
  text: 'When it enters: it gains +1 attack and +1 health for each other Beast of yours.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  tribe: 'beast',
  keywords: ['charge'],
  attack: 2,
  health: 5,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'beast', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Dire Wolf of the Fang: a wolf with striped ginger fur and frost in its mane, sniffing the air, indigo accents, prehistoric jungle era style'
  }
})
