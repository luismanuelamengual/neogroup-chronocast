import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'charged-shard',
  type: 'item',
  name: 'Charged Shard',
  text: 'Your hero gains 2 energy.',
  flavor: 'A splinter of lightning, kept in a jar.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 1,
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject: 'a jagged crystal shard crackling with golden lightning inside a small glass jar'
  }
})
