import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lullaby-of-the-lost',
  type: 'ability',
  name: 'Lullaby of the Lost',
  text: 'Stun a random enemy ally and your hero heals 5.',
  flavor: 'Sleep. Everyone sleeps, in the end.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
  },
  ai: { value: 2, tags: ['control', 'heal'] },
  art: {
    subject: 'Nyx singing softly as enemies fall asleep in a mist of green notes'
  }
})
