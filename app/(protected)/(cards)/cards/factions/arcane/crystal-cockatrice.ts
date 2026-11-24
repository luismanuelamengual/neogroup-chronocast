import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crystal-cockatrice',
  type: 'ally',
  name: 'Crystal Cockatrice',
  text: 'When it enters: draw a card. At the start of each phase: deal 1 arcane damage to the enemy hero.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'legendary',
  element: 'arcane',
  resist: ['fire'],
  weak: ['ice'],
  price: 5200,
  cost: 4,
  tribe: 'drake',
  keywords: ['flying', 'shield', 'unique'],
  attack: 6,
  health: 7,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 6, tags: ['aggro', 'draw'] },
  art: {
    subject:
      'Crystal Cockatrice: a cockatrice with crimson scales and a forked tail, roaring with jaws wide open, amber accents, medieval magic order style'
  }
})
