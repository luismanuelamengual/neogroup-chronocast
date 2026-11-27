import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclock-chip',
  type: 'attachment',
  subtype: 'implant',
  name: 'Overclock Chip',
  text: 'Attach to an ally of yours: it gains +3 attack. At the end of each phase, it takes 1 damage.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 3,
  targets: ['friendlyAlly'],
  onPhaseEnd(ctx) {
    const found = host(ctx)

    if (found) {
      damage(ctx, found.ref, 1)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Overclock Chip: an overheating microchip glowing white-hot with smoke rising, plugged into a neck port, hot pink accents, neon cyberpunk future style'
  }
})
