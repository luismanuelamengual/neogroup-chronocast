import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hourglass-warden',
  type: 'ally',
  name: 'Hourglass Warden',
  text: '',
  flavor: 'Time stops at her shield.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  health: 36,
  keywords: ['guardian', 'shield'],
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject: 'a heavily armored warden holding a tall shield with a giant hourglass embedded, sand frozen mid-fall'
  }
})
