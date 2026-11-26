import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shroud-of-the-final-bell',
  type: 'armor',
  name: 'Shroud of the Final Bell',
  text: 'At the start of each phase: deal 2 time damage to the enemy hero.',
  flavor: 'Whoever wears it lives every hour as the last.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'legendary',
  price: 2320,
  element: 'time',
  cost: 4,
  keywords: ['unique'],
  armor: 3,
  durability: 4,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 6 },
  art: {
    subject:
      'Shroud of the Final Bell: a tattered black burial shroud stitched with broken clock hands and a small cracked bell, floating in darkness, violet accents'
  }
})
