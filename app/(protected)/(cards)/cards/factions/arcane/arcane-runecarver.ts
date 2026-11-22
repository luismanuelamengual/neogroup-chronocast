import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-runecarver',
  type: 'ally',
  name: 'Arcane Runecarver',
  text: 'At the start of each phase: deal 1 arcane damage to the enemy hero.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  element: 'arcane',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  keywords: ['flying'],
  attack: 3,
  health: 7,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'a medieval spellcaster, the arcane runecarver, charging into battle, medieval magic order style'
  }
})
