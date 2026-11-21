import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'labyrinth-guardian',
  type: 'ally',
  boss: true,
  name: 'Labyrinth Guardian',
  text: '',
  flavor: 'Every corridor has one.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
  rarity: 'epic',
  cost: 5,
  attack: 18,
  health: 22,
  keywords: ['guardian'],
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a bronze-armored bull warrior blocking a narrow stone corridor of the labyrinth'
  }
})
