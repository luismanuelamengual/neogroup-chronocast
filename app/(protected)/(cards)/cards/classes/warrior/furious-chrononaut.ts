import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-chrononaut',
  type: 'ally',
  name: 'Furious Chrononaut',
  text: 'When it dies: your hero gains 3 armor.',
  flavor: 'He has been angry since the Bronze Age.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  keywords: ['charge'],
  attack: 2,
  health: 8,
  onDeath(ctx) {
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Furious Chrononaut: a stocky adult owlfolk woman with sandy feathers and a gap-toothed grin, wearing a knotted bandana, dressed in a Renaissance doublet with mismatched armor pieces, adjusting a brass time compass on the wrist, with a serene smile, tangerine accents, warrior style'
  }
})
