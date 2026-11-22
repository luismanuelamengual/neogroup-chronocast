import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crystal-wisp',
  type: 'ally',
  name: 'Crystal Wisp',
  text: 'At the start of each phase: deal 1 fire damage to the enemy hero.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 205,
  cost: 5,
  tribe: 'fae',
  keywords: ['shield'],
  attack: 6,
  health: 10,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject: 'a fairy-tale fae creature, the crystal wisp, charging into battle, medieval magic order style'
  }
})
