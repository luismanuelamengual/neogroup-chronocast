import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'victorious-bronze-giant',
  type: 'ally',
  name: 'Victorious Bronze Giant',
  text: 'When it enters: your hero gains 8 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  resist: ['earth'],
  weak: ['acid'],
  price: 750,
  cost: 6,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 7,
  health: 14,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 8)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject: 'a mythic ancient creature, the victorious bronze giant, roaring, ancient bronze-age empire style'
  }
})
