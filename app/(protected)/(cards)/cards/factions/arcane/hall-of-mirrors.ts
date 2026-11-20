import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hall-of-mirrors',
  type: 'location',
  name: 'Hall of Mirrors',
  text: 'At the end of each phase, deal 3 damage to a random enemy ally. At the start of each phase, your hero heals 3.',
  flavor: 'Every reflection is a spell waiting for its turn.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseEnd(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 4, tags: ['removal', 'heal'] },
  art: {
    subject: 'an endless enchanted hall of mirrors glowing with violet light, each reflection showing a different era'
  }
})
