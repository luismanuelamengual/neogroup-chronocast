import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tribal-warchief',
  type: 'ally',
  name: 'Tribal Warchief',
  text: 'On enter: your other allies gain +3 attack and +3 health and your hero heals 6.',
  flavor: 'His war cry can start an avalanche.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 18,
  health: 36,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 3, 3, true)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
  },
  ai: { value: 6, tags: ['buff', 'heal'] },
  art: {
    subject: 'a massive tribal warchief in a mammoth-skull helmet holding a huge stone axe, warriors behind him'
  }
})
