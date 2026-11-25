import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'satyr-of-renewal',
  type: 'ally',
  name: 'Satyr of Renewal',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 50,
  cost: 2,
  tribe: 'fae',
  attack: 3,
  health: 5,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Satyr of Renewal: a satyr with snowy coat and silver mane and small curled horns, charging head-on, saffron yellow accents, mystic healer style'
  }
})
