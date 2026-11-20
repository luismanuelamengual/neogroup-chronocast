import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'static-wraith',
  type: 'ally',
  boss: true,
  name: 'Static Wraith',
  text: '',
  flavor: 'Turn it off. It is still there.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'epic',
  cost: 3,
  attack: 12,
  health: 14,
  keywords: ['stealth', 'quick'],
  ai: { value: 4 },
  art: {
    subject: 'a flickering ghost made of TV static and glitch lines reaching out of a broken screen'
  }
})
