import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rod-of-ruin',
  type: 'weapon',
  name: 'Rod of Ruin',
  text: 'When it is equipped: your hero gains 7 armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  attack: 6,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 7)
  },
  ai: { value: 5 },
  art: {
    subject: 'Rod of Ruin: a single rod weapon floating in dramatic light, mage style'
  }
})
