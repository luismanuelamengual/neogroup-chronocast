import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon, hasPanoply } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'victorious-bronze-giant',
  type: 'ally',
  name: 'Victorious Bronze Giant',
  text: 'When it enters: with Panoply, destroy the enemy weapon.',
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
    if (hasPanoply(ctx)) {
      destroyWeapon(ctx, ctx.opponent)
    }
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Victorious Bronze Giant: a giant with a golden hide and gilded armor plates, rearing up, rose pink accents, ancient bronze-age empire style'
  }
})
