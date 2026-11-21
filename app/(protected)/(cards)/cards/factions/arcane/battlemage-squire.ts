import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'battlemage-squire',
  type: 'ally',
  name: 'Battlemage Squire',
  text: '',
  flavor: 'Half sword, half spell, all enthusiasm.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  health: 7,
  keywords: ['ranged'],
  ai: { value: 2 },
  art: {
    subject: 'a young squire holding a short sword glowing with blue runes, sparks flying'
  }
})
