import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-gatherer',
  type: 'ally',
  name: 'Thundering Gatherer',
  text: 'When it enters: it gains +1 attack and +2 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  resist: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 6,
  health: 8,
  onEnter(ctx) {
    buffSelf(ctx, 1, 2)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Thundering Gatherer: a hunched elderly man with freckled fair skin, salt-and-pepper hair in a messy bun, a thin mustache and a gap-toothed grin, wearing feathers tied in the hair, dressed in a leopard-skin wrap with bone beads, gripping a well-worn weapon, crouched low, with a sly grin, magenta accents, prehistoric jungle era style'
  }
})
