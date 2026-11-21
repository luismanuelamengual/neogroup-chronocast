import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'kaze-the-cyber-ronin',
  type: 'ally',
  name: 'Kaze, the Cyber Ronin',
  text: '',
  flavor: 'Her old master. Her new rival. Her only friend.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 16,
  health: 12,
  keywords: ['quick', 'frenzy'],
  ai: { value: 5 },
  art: {
    subject: 'an old cyber ronin with a straw hat and chrome arm, drawing a glowing red katana in the neon rain'
  }
})
