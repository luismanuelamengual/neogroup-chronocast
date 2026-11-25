import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclocked-piston-titan',
  type: 'ally',
  name: 'Overclocked Piston Titan',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 65,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Overclocked Piston Titan: a titan built of riveted copper with green patina, with a single giant lens, standing guard, steampunk steam era style'
  }
})
