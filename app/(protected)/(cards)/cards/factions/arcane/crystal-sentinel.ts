import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'crystal-sentinel',
  type: 'ally',
  name: 'Crystal Sentinel',
  text: '',
  flavor: 'Light passes through it. Nothing else does.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 8,
  health: 30,
  keywords: ['guardian'],
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'a tall translucent knight made of violet crystal guarding a magic portal'
  }
})
