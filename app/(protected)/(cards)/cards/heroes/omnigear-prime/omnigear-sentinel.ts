import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'omnigear-sentinel',
  type: 'ally',
  boss: true,
  name: 'Omnigear Sentinel',
  text: '',
  flavor: 'Perfect. Identical. Endless.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'epic',
  cost: 5,
  attack: 18,
  health: 40,
  keywords: ['shield'],
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a sleek brass and steel robot sentinel stepping off an assembly line, identical copies behind it'
  }
})
