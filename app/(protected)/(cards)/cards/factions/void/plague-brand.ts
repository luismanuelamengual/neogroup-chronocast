import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { host, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plague-brand',
  type: 'attachment',
  name: 'Plague Brand',
  text: 'Attach to an enemy ally: at the start of each phase, it is poisoned (2).',
  flavor: 'The sickness spreads from the inside.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      poison(ctx, found.ref, 2)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a sickly purple rune burned into the skin of a warrior, green veins spreading from it'
  }
})
