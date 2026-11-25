import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dilophosaur-of-the-silent-trail',
  type: 'ally',
  name: 'Dilophosaur of the Silent Trail',
  text: 'When it enters: deal 5 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'common',
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'saurian',
  attack: 5,
  health: 6,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Dilophosaur of the Silent Trail: a dilophosaur with an ochre hide with zigzag patterns and a long whip tail, mid-stride, gold accents, hunter style'
  }
})
