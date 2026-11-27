import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thundering-gatherer',
  type: 'ally',
  name: 'Thundering Gatherer',
  text: 'When a trap of yours goes off: draw a card.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 6,
  health: 8,
  onTrapTriggered(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Thundering Gatherer: a hunched elderly man with freckled fair skin, salt-and-pepper hair in a messy bun, a thin mustache and a gap-toothed grin, wearing feathers tied in the hair, dressed in a leopard-skin wrap with bone beads, gripping a well-worn weapon, crouched low, with a sly grin, magenta accents, prehistoric jungle era style'
  }
})
