import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silk-wrap-of-ruin',
  type: 'armor',
  subtype: 'shroud',
  name: 'Silk Wrap of Ruin',
  text: 'When an ally of yours dies: this armor gains +1 durability.',
  flavor: 'Soft as silk, cold as an ending.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  armor: 2,
  durability: 3,
  onOwnAllyDeath(ctx) {
    repairArmor(ctx, ctx.owner, 1)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Silk Wrap of Ruin: a single wrap made of blackened iron with gold inlay, leaning against a ruined wall, bursting toward the viewer, gold accents, mage style'
  }
})
