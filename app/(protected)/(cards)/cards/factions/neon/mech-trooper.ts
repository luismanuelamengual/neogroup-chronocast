import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'mech-trooper',
  type: 'ally',
  name: 'Mech Trooper',
  text: '',
  flavor: 'Standard issue. Standard overkill.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 22,
  health: 22,
  ai: { value: 5 },
  art: {
    subject: 'a bulky combat mech suit with a pilot visible in the cockpit, standing in a neon-lit hangar'
  }
})
