import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-chrononaut',
  type: 'ally',
  name: 'Furious Chrononaut',
  text: 'When it dies: your hero gains 2 energy.',
  flavor: 'He has been angry since the Bronze Age.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  keywords: ['charge'],
  attack: 2,
  health: 8,
  onDeath(ctx) {
    gainEnergy(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Furious Chrononaut: a stocky adult owlfolk woman with sandy feathers and a gap-toothed grin, wearing a knotted bandana, dressed in a Renaissance doublet with mismatched armor pieces, adjusting a brass time compass on the wrist, with a serene smile, tangerine accents, warrior style'
  }
})
