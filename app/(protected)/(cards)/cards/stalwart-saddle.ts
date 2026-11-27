import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalwart-saddle',
  type: 'attachment',
  subtype: 'mount',
  name: 'Stalwart Saddle',
  text: 'Attach to an ally of yours: it gains +2 attack and +5 health. When that ally attacks: a random enemy ally becomes your Prey.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  keywords: ['guardian'],
  attack: 2,
  health: 5,
  targets: ['friendlyAlly'],
  onHostAttack(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Stalwart Saddle: an enchanted saddle made of blue steel with silver runes, on a fur rug, swirling around the center, gold accents, warrior style'
  }
})
