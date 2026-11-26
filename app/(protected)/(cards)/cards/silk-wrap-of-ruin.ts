import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silk-wrap-of-ruin',
  type: 'armor',
  name: 'Silk Wrap of Ruin',
  text: 'When it is equipped: your allies heal 2.',
  flavor: 'Soft as silk, cold as an ending.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  armor: 2,
  durability: 3,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Silk Wrap of Ruin: a single wrap made of blackened iron with gold inlay, leaning against a ruined wall, bursting toward the viewer, gold accents, mage style'
  }
})
