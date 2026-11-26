import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grim-shot',
  type: 'ability',
  name: 'Grim Shot',
  text: 'Deal 2 shadow damage to an enemy slot, +2 for each Horror of yours.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  element: 'shadow',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 2 + 2 * tribeAllies(ctx, ctx.owner, 'horror').length)
  },
  ai: { value: 2, tags: ['removal', 'tribe'] },
  art: {
    subject:
      'Grim Shot: a single arrow in flight trailing a streak of light, wrapped in swirling black smoke, above a calm lake at dusk, dramatic backlight, saffron yellow accents, dark end-of-time void style'
  }
})
