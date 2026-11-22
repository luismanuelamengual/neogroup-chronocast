import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-seer',
  type: 'ally',
  name: 'Dreaming Seer',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  resist: ['light'],
  price: 170,
  cost: 3,
  tribe: 'oracle',
  keywords: ['shield'],
  attack: 5,
  health: 6,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'an ancient temple seer in white robes, the dreaming seer, raising its weapon, mystic healer style'
  }
})
