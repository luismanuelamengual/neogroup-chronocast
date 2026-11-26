import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'patient-vest',
  type: 'armor',
  subtype: 'suit',
  name: 'Patient Vest',
  text: '',
  flavor: 'It waits, like the one who wears it.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  armor: 3,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject:
      'Patient Vest: a single vest made of carved obsidian, on a pile of old coins, seen from above, violet accents, hunter style'
  }
})
