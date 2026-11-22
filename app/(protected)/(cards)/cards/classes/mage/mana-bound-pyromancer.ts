import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-bound-pyromancer',
  type: 'ally',
  name: 'Mana-Bound Pyromancer',
  text: 'When it enters: draw the first ability of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'fire',
  resist: ['arcane'],
  price: 630,
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
    subject: 'a medieval spellcaster, the mana-bound pyromancer, charging into battle, mage style'
  }
})
