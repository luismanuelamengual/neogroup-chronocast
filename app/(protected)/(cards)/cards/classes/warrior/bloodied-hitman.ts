import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-hitman',
  type: 'ally',
  name: 'Bloodied Hitman',
  text: 'When it enters: your hero gains 7 armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  tribe: 'enforcer',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 7)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a cyberpunk street criminal, the bloodied hitman, mid-leap, warrior style'
  }
})
