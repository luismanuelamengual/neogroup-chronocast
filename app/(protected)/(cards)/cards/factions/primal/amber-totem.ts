import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-totem',
  type: 'item',
  name: 'Amber Totem',
  text: 'Your allies gain +1 attack and +3 health and your hero heals 4.',
  flavor: 'A bug trapped in amber, a spirit trapped in the bug.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 3)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 2, tags: ['buff', 'heal'] },
  art: {
    subject: 'a carved wooden totem with a glowing amber stone in its center, insects frozen inside'
  }
})
