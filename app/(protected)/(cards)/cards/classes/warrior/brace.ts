import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brace',
  type: 'ability',
  name: 'Brace',
  text: 'Your hero gains 8 armor. Instant.',
  flavor: 'Plant your feet. Here it comes.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 8)
  },
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject: 'a warrior crouching behind a big shield, bracing against a rushing shockwave'
  }
})
