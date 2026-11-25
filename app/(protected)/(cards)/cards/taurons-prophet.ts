import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'taurons-prophet',
  type: 'ally',
  name: "Tauron's Prophet",
  text: 'When it enters: if you have another Oracle, draw a card. When it dies: your other allies gain +1 attack.',
  faction: 'bronze',
  restriction: { heroes: ['tauron-labyrinth-lord'] },
  rarity: 'legendary',
  resist: ['light'],
  price: 5600,
  cost: 5,
  tribe: 'oracle',
  keywords: ['shield', 'unique'],
  attack: 5,
  health: 13,
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'oracle', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  onDeath(ctx) {
    buffAllies(ctx, ctx.owner, 1, 0, true)
  },
  ai: { value: 7, tags: ['buff', 'draw', 'tribe'] },
  art: {
    subject:
      "Tauron's Prophet: an athletic adult woman with pale skin, chestnut hair in a topknot and a monocle, wearing a sheer veil, dressed in linen robes painted with eye symbols, pointing at the sky with a scroll, with a mischievous wink, rose pink accents, ancient bronze-age empire style"
  }
})
