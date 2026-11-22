import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laureled-sentinel',
  type: 'ally',
  name: 'Laureled Sentinel',
  text: 'When it enters: draw the first Colossus of your deck.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 170,
  cost: 3,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'colossus')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject: 'a mythic ancient creature, the laureled sentinel, lunging forward, ancient bronze-age empire style'
  }
})
