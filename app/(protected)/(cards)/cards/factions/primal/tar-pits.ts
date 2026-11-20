import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-pits',
  type: 'location',
  name: 'Tar Pits',
  text: 'At the start of each phase, deal 4 damage to a random enemy ally and your hero heals 3.',
  flavor: 'Many came in. Few climbed out.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 4, tags: ['removal', 'heal'] },
  art: {
    subject: 'bubbling black tar pits at dusk with bones sticking out and a volcano smoking in the distance'
  }
})
