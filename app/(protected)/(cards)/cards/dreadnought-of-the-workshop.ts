import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreadnought-of-the-workshop',
  type: 'ally',
  name: 'Dreadnought of the Workshop',
  text: 'At the start of each phase: if you have 3 or more artifacts, deal 2 damage to a random enemy ally.',
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
    if (artifactCount(ctx) >= 3) {
      damageRandomAlly(ctx, ctx.opponent, 2)
    }
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Dreadnought of the Workshop: a dreadnought built of white plating with magenta glow, with tank treads, hovering above the ground, steampunk steam era style'
  }
})
