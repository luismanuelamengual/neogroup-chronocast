import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, heal, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leeching-mark',
  type: 'attachment',
  name: 'Leeching Mark',
  text: 'Attach to an enemy ally: at the start of each phase, it loses 3 health and your hero heals 3.',
  flavor: 'Its strength becomes yours, drop by drop.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 180,
  cost: 2,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      damageAlly(ctx, found.unit, 3)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a glowing red sigil on the chest of a warrior, thin streams of life flowing out of it'
  }
})
