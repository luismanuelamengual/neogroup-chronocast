import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'victorious-bronze-giant',
  type: 'ally',
  name: 'Victorious Bronze Giant',
  text: 'When it enters: your hero heals 8.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'rare',
  resist: ['earth'],
  weak: ['acid'],
  price: 600,
  cost: 6,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 7,
  health: 14,
  onEnter(ctx) {
    healHero(ctx, 8)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Victorious Bronze Giant: a giant with a golden hide and gilded armor plates, rearing up, rose pink accents, ancient bronze-age empire style'
  }
})
