import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-squire',
  type: 'ally',
  name: 'Brave Squire',
  text: 'When it enters: draw the first weapon of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 80,
  cost: 6,
  attack: 7,
  health: 12,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'weapon')
  },
  ai: { value: 6, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the brave squire, crouching, ready to strike, warrior style'
  }
})
