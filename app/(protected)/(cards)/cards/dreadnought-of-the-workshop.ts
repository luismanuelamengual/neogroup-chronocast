import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreadnought-of-the-workshop',
  type: 'ally',
  name: 'Dreadnought of the Workshop',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  weak: ['wind'],
  price: 200,
  cost: 5,
  tribe: 'skyship',
  attack: 6,
  health: 11,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Dreadnought of the Workshop: a dreadnought built of white plating with magenta glow, with tank treads, hovering above the ground, steampunk steam era style'
  }
})
