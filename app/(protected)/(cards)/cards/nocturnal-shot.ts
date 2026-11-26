import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-shot',
  type: 'ability',
  subtype: 'ritual',
  name: 'Nocturnal Shot',
  text: 'Deal 5 shadow damage to an enemy slot, +2 for each Drifter of yours.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'exotic',
  element: 'shadow',
  price: 3160,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 5 + 2 * tribeAllies(ctx, ctx.owner, 'drifter').length)
  },
  ai: { value: 5, tags: ['removal', 'tribe'] },
  art: {
    subject:
      'Nocturnal Shot: a single arrow in flight trailing a streak of light, wrapped in swirling black smoke, over rooftops at night, close-up filling the frame, violet accents, hunter style'
  }
})
