import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-rage',
  type: 'ability',
  subtype: 'instinct',
  name: 'Aegis of Rage',
  text: 'Your hero heals 3 for each enemy ally. Instant.',
  flavor: 'The angrier the blow, the stronger the shield.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    healHero(ctx, 3 * alliesOf(ctx, ctx.opponent).length)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Aegis of Rage: a radiant dome-shaped magical barrier, against a starry sky, swirling around the center, indigo accents, warrior style'
  }
})
