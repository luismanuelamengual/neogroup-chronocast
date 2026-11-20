import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holy-water',
  type: 'item',
  name: 'Holy Water',
  text: 'Your hero heals 8 and your allies heal 4.',
  flavor: 'Splash generously.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
    healAllAllies(ctx, ctx.owner, 4)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'a crystal vial of glowing holy water with a silver cap'
  }
})
