import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-rage',
  type: 'ability',
  name: 'Aegis of Rage',
  text: 'Your hero gains 9 armor. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 9)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Aegis of Rage: a radiant dome-shaped magical barrier, against a starry sky, swirling around the center, indigo accents, warrior style'
  }
})
