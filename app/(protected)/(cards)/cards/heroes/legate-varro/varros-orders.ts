import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'varros-orders',
  type: 'ability',
  name: "Varro's Orders",
  text: 'Your allies gain +1 attack and +3 health and your hero gains 3 armor. Fast.',
  flavor: 'Shields up, eyes front, nobody dies today.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 3)
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['buff', 'defense'] },
  art: {
    subject: 'Legate Varro pointing his gladius forward as his legionaries raise their shields in unison'
  }
})
