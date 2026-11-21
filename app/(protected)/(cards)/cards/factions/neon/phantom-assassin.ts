import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phantom-assassin',
  type: 'ally',
  name: 'Phantom Assassin',
  text: '',
  flavor: 'Her optical camouflage is the last thing you will not see.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 16,
  health: 8,
  keywords: ['stealth', 'poison'],
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a female assassin in an optical camouflage suit half invisible, a glowing poison blade in hand'
  }
})
