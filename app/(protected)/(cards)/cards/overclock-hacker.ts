import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isEnhanced } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclock-hacker',
  type: 'ally',
  name: 'Overclock Hacker',
  text: 'Your Enhanced allies (with an implant) have Stealth until they attack.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  tribe: 'netrunner',
  attack: 4,
  health: 4,
  auraKeywords(ctx, unit) {
    return isEnhanced(unit) && !unit.hasAttacked ? ['stealth'] : []
  },
  ai: { value: 4 },
  art: {
    subject:
      'Overclock Hacker: a hooded netrunner with glowing cybernetic eyes typing on a holographic keyboard, overheating rigs and cables around, purple and teal glow, teal accents, neon cyberpunk future style'
  }
})
