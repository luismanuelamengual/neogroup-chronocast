import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-mercy',
  type: 'weapon',
  name: 'Lantern Staff of Mercy',
  text: 'When it is equipped: your hero gains 5 armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 4 },
  art: {
    subject: 'Lantern Staff of Mercy: a single lantern staff weapon floating in dramatic light, mystic healer style'
  }
})
