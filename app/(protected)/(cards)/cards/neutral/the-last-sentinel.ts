import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'the-last-sentinel',
  type: 'ally',
  name: 'The Last Sentinel',
  text: '',
  flavor: 'When time ends, it will still be standing guard.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'exotic',
  price: 13500,
  cost: 7,
  attack: 20,
  health: 70,
  keywords: ['guardian', 'shield', 'thorns', 'unique'],
  thorns: 8,
  ai: { value: 8, tags: ['defense'] },
  art: {
    subject:
      'an ancient giant knight of stone and bronze covered in thorny crystals, guarding a gate at the end of time'
  }
})
