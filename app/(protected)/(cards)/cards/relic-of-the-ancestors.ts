import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relic-of-the-ancestors',
  type: 'artifact',
  name: 'Relic of the Ancestors',
  text: 'At the start of each phase: your hero heals 1 and deal 1 light damage to the enemy hero.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'legendary',
  element: 'light',
  price: 2000,
  cost: 1,
  onPhaseStart(ctx) {
    healHero(ctx, 1)
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 1, 'light')
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Relic of the Ancestors: an ancient relic made of blue steel with silver runes, radiating golden holy light, standing on a hilltop at dusk, swirling around the center, tangerine accents, mystic healer style'
  }
})
