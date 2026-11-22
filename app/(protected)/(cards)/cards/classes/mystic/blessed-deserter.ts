import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-deserter',
  type: 'ally',
  name: 'Blessed Deserter',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  keywords: ['lifesteal'],
  attack: 3,
  health: 7,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a time-traveling adventurer, the blessed deserter, crouching, ready to strike, mystic healer style'
  }
})
