import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tower-of-stars',
  type: 'location',
  name: 'Tower of Stars',
  text: 'At the start of each phase, deal 3 damage to the enemy hero.',
  flavor: 'From its top, every era looks small.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 3, tags: ['burn'] },
  art: {
    subject:
      'a slender white tower reaching into a violet night sky full of swirling constellations, a beam of starlight at its top'
  }
})
