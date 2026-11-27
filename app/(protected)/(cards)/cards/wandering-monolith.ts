import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, randomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-monolith',
  type: 'artifact',
  name: 'Wandering Monolith',
  text: 'At the start of each phase: a random ally of yours gains +1 attack and +1 health. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    const unit = randomAlly(ctx, ctx.owner)

    if (unit) {
      buff(ctx, unit, 1, 1)
      spendCharge(ctx)
    }
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Wandering Monolith: an ancient monolith made of carved obsidian, standing in a ruined temple, close-up filling the frame, violet accents, steampunk steam era style'
  }
})
