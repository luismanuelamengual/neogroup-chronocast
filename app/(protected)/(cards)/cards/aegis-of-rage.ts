import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-rage',
  type: 'ability',
  subtype: 'instinct',
  name: 'Aegis of Rage',
  text: 'Your hero heals 9. Instant.',
  flavor: 'The angrier the blow, the stronger the shield.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Aegis of Rage: a radiant dome-shaped magical barrier, against a starry sky, swirling around the center, indigo accents, warrior style'
  }
})
