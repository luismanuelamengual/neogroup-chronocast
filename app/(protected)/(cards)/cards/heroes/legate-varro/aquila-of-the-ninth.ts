import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aquila-of-the-ninth',
  type: 'artifact',
  name: 'Aquila of the Ninth',
  text: 'Artifact. At the start of each phase, your allies gain +1 attack and +3 health.',
  flavor: 'The lost legion found its way back, one century late.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'legendary',
  price: 4500,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      buff(ctx, unit, 1, 3)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a golden eagle standard of a Roman legion planted on a hill at dawn, glowing with a turquoise time rift'
  }
})
