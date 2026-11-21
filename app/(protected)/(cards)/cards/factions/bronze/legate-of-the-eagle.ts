import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, draw, factionAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legate-of-the-eagle',
  type: 'ally',
  name: 'Legate of the Eagle',
  text: 'On enter: your other allies gain +2 attack. If you have 3 or more Bronze allies, draw 2 cards.',
  flavor: 'Where the eagle goes, the legions follow.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 22,
  health: 21,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 2, 0, true)

    if (factionAllies(ctx, ctx.owner, 'bronze') >= 3) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 7, tags: ['buff', 'draw'] },
  art: {
    subject: 'a proud legate holding a golden eagle standard high on a hill, legions spread out below'
  }
})
