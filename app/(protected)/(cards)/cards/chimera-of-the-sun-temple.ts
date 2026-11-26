import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chimera-of-the-sun-temple',
  type: 'ally',
  name: 'Chimera of the Sun Temple',
  text: 'When it dies: your other allies gain +1 attack. At the start of each phase: your hero heals 2.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'epic',
  element: 'light',
  resist: ['earth'],
  weak: ['acid'],
  price: 1200,
  cost: 4,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 4,
  health: 12,
  onDeath(ctx) {
    buffAllies(ctx, ctx.owner, 1, 0, true)
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['buff', 'defense'] },
  art: {
    subject:
      'Chimera of the Sun Temple: a chimera with a storm-grey hide and old battle scars, baring its teeth, tangerine accents, ancient bronze-age empire style'
  }
})
