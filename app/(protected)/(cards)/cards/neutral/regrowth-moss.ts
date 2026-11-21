import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'regrowth-moss',
  type: 'attachment',
  name: 'Regrowth Moss',
  text: 'Attach to an ally of yours: at the start of each phase, it heals 5.',
  flavor: 'It grows over wounds, not over stones.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 75,
  cost: 1,
  targets: ['friendlyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      heal(ctx, found.ref, 5)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'glowing green moss growing over the bandaged arm of a warrior, healing the wound'
  }
})
