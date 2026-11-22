import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'guardian-spirit',
  type: 'ally',
  token: true,
  name: 'Guardian Spirit',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  cost: 1,
  tribe: 'elemental',
  keywords: ['guardian'],
  attack: 1,
  health: 6,
  ai: { value: 1 },
  art: {
    subject: 'a translucent glowing spirit holding a shield of light, time rift wanderer style'
  }
})
