import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'starlit-unicorn',
  type: 'ally',
  name: 'Starlit Unicorn',
  text: 'On enter: your hero heals 8. At the end of each phase, your allies heal 2.',
  flavor: 'Its horn points to the brightest star, always.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 13,
  health: 28,
  onEnter(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
  },
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'a white unicorn with a mane of stars galloping across a moonlit meadow'
  }
})
