import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-bound-pyromancer',
  type: 'ally',
  name: 'Mana-Bound Pyromancer',
  text: 'When it enters: draw the first ability of your deck.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  element: 'fire',
  resist: ['arcane'],
  price: 480,
  cost: 4,
  tribe: 'magus',
  keywords: ['flying'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'ability')
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Mana-Bound Pyromancer: a plump elderly half-orc woman with umber skin, charcoal grey hair slicked back and a beauty mark, wearing a deep hood, dressed in layered emerald robes with a book chained to the belt, conjuring a spiral of flame, with calm focus, lime green accents, mage style'
  }
})
