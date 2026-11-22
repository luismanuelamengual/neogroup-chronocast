import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dilophosaur-of-the-silent-trail',
  type: 'ally',
  name: 'Dilophosaur of the Silent Trail',
  text: 'When it enters: deal 5 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
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
    subject: 'a dinosaur, the dilophosaur of the silent trail, lunging forward, hunter style'
  }
})
