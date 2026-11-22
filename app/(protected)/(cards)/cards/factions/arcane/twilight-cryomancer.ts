import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'twilight-cryomancer',
  type: 'ally',
  name: 'Twilight Cryomancer',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  element: 'ice',
  resist: ['arcane'],
  price: 65,
  cost: 4,
  tribe: 'magus',
  keywords: ['shield'],
  attack: 6,
  health: 8,
  ai: { value: 4 },
  art: {
    subject: 'a medieval spellcaster, the twilight cryomancer, glaring at the viewer, medieval magic order style'
  }
})
