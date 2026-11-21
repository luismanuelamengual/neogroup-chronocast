import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'synth-brawler',
  type: 'ally',
  name: 'Synth Brawler',
  text: '',
  flavor: 'Upgraded fists. Original attitude.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 14,
  health: 13,
  ai: { value: 3 },
  art: {
    subject: 'a muscular street fighter with chrome cybernetic arms in a neon-lit underground ring'
  }
})
