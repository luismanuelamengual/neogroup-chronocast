import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chimera-of-the-shieldwall',
  type: 'ally',
  name: 'Chimera of the Shieldwall',
  text: 'When it dies: your hero heals 8.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 220,
  cost: 7,
  tribe: 'colossus',
  keywords: ['guardian', 'retaliate'],
  attack: 6,
  health: 15,
  onDeath(ctx) {
    healHero(ctx, 8)
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Chimera of the Shieldwall: a chimera with a golden hide and laurel leaves tangled in it, pawing the ground, magenta accents, warrior style'
  }
})
