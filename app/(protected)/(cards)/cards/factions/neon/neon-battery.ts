import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neon-battery',
  type: 'item',
  name: 'Neon Battery',
  text: 'Your hero gains 1 energy. Instant.',
  flavor: 'Fully charged in a heartbeat.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 0,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject: 'a glowing cyan and magenta battery cell with lightning swirling inside, held in a gloved hand'
  }
})
