import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { enhancedAllies, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overdriven-sentry-bot',
  type: 'ally',
  name: 'Overdriven Sentry Bot',
  text: 'At the end of each phase: your Enhanced allies heal 2.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  element: 'sonic',
  weak: ['lightning'],
  price: 220,
  cost: 7,
  tribe: 'cyborg',
  keywords: ['quick'],
  attack: 9,
  health: 11,
  onPhaseEnd(ctx) {
    for (const unit of enhancedAllies(ctx, ctx.owner)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 2)
      }
    }
  },
  ai: { value: 7, tags: ['aggro'] },
  art: {
    subject:
      'Overdriven Sentry Bot: a bot built of riveted copper with green patina, with segmented spider legs, skidding into position, neon cyberpunk future style'
  }
})
