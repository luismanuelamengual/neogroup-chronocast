import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'machinist-of-the-foundry',
  type: 'ally',
  name: 'Machinist of the Foundry',
  text: '',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'inventor',
  keywords: ['shield'],
  attack: 5,
  health: 7,
  ai: { value: 3 },
  art: {
    subject:
      'a steampunk inventor with goggles, the machinist of the foundry, glaring at the viewer, steampunk steam era style'
  }
})
