import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-haruspex',
  type: 'ally',
  name: 'Imperial Haruspex',
  text: 'When it attacks: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  attack: 7,
  health: 9,
  onAttack(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'an ancient temple seer in white robes, the imperial haruspex, lunging forward, ancient bronze-age empire style'
  }
})
