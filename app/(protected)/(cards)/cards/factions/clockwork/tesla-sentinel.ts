import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tesla-sentinel',
  type: 'ally',
  name: 'Tesla Sentinel',
  text: '',
  flavor: 'Touch it. Go ahead.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 14,
  health: 40,
  keywords: ['guardian', 'thorns'],
  thorns: 6,
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a tall robotic guardian with tesla coils on its shoulders crackling with blue electricity'
  }
})
