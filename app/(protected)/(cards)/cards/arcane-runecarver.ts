import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-runecarver',
  type: 'ally',
  name: 'Arcane Runecarver',
  text: 'At the start of each phase: deal 1 arcane damage to the enemy hero.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
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
    subject:
      'Arcane Runecarver: a broad-shouldered elderly man with ruddy skin, charcoal grey hair long and straight, a forked beard and a beauty mark, wearing a pointed hat, dressed in violet robes with floating rune bands, carving a glowing rune into stone, with calm focus, rose pink accents, medieval magic order style'
  }
})
