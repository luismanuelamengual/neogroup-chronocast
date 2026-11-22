import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-wanderer',
  type: 'ally',
  name: 'Restless Wanderer',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  keywords: ['flying'],
  attack: 6,
  health: 7,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'a time-traveling adventurer, the restless wanderer, crouching, ready to strike, time rift wanderer style'
  }
})
