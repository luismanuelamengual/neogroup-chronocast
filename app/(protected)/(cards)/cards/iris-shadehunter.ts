import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iris-shadehunter',
  type: 'ally',
  name: 'Iris Shadehunter',
  text: 'Its stealth is not lost by attacking.',
  flavor: 'You will only see her in the logs.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2200,
  cost: 5,
  tribe: 'netrunner',
  keywords: ['stealth', 'unique'],
  attack: 6,
  health: 6,
  persistentStealth: true,
  ai: { value: 6 },
  art: {
    subject:
      'Iris Shadehunter: a hooded netrunner woman with a visor of violet light crouching on a neon-lit rooftop, a monofilament blade in hand, full body, violet accents, neon cyberpunk future style'
  }
})
