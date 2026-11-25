import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-hound-of-coal',
  type: 'ally',
  name: 'Clockwork Hound of Coal',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 50,
  cost: 2,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 1,
  health: 7,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Clockwork Hound of Coal: a hound built of gunmetal with orange hazard stripes, with segmented spider legs, standing guard, steampunk steam era style'
  }
})
