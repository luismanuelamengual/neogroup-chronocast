import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hungry-blessing',
  type: 'attachment',
  subtype: 'charm',
  name: 'Hungry Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health. When a trap of yours goes off: that ally gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  keywords: ['guardian'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  onTrapTriggered(ctx) {
    const found = host(ctx)

    if (found) {
      buff(ctx, found.unit, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Hungry Blessing: an enchanted blessing made of white bone and leather wraps, on a worn wooden table, framed by drifting embers, violet accents, prehistoric jungle era style'
  }
})
