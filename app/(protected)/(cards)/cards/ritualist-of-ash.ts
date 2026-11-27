import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ritualist-of-ash',
  type: 'ally',
  name: 'Ritualist of Ash',
  text: 'When it enters: sacrifice your weakest other ally: if you do, draw 2 cards.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  element: 'fire',
  price: 600,
  cost: 6,
  tribe: 'cultist',
  attack: 8,
  health: 13,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 7, tags: ['draw', 'sacrifice'] },
  art: {
    subject:
      'Ritualist of Ash: a towering middle-aged pale ghoul-like woman with blue-black hair long and straight and a beauty mark, wearing a bone mask, dressed in ash-grey vestments with a rusted censer, drawing a circle in ash, with a fierce scowl, emerald accents, dark end-of-time void style'
  }
})
