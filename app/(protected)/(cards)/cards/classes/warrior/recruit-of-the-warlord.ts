import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'recruit-of-the-warlord',
  type: 'ally',
  name: 'Recruit of the Warlord',
  text: 'When it enters: draw the first weapon of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'legionnaire',
  keywords: ['charge'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'weapon')
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'an ancient bronze-armored soldier, the recruit of the warlord, crouching, ready to strike, warrior style'
  }
})
