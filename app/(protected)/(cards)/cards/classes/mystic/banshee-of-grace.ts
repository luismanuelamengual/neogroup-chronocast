import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-grace',
  type: 'ally',
  name: 'Banshee of Grace',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 750,
  cost: 6,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 8,
  health: 13,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 7, tags: ['heal'] },
  art: {
    subject: 'an undead creature, the banshee of grace, crouching, ready to strike, mystic healer style'
  }
})
