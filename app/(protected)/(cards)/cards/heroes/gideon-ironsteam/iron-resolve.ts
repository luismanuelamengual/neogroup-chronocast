import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-resolve',
  type: 'ability',
  name: 'Iron Resolve',
  text: 'Your hero gains 12 armor and gain 1 Chronos. Instant.',
  flavor: 'Rivets do not bend.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['defense', 'ramp'] },
  art: {
    subject: 'Gideon standing firm as his steel plates lock into place around him'
  }
})
