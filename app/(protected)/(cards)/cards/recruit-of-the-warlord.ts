import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'recruit-of-the-warlord',
  type: 'ally',
  name: 'Recruit of the Warlord',
  text: 'When it enters: draw the first weapon of your deck.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
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
    subject:
      'Recruit of the Warlord: a plump elderly man with freckled fair skin, charcoal grey hair in a single long braid, a full beard and a burn scar on the jaw, wearing a crested helmet, dressed in segmented lorica armor with a crested helmet, gripping a spear nervously, with a mischievous wink, ivory accents, warrior style'
  }
})
