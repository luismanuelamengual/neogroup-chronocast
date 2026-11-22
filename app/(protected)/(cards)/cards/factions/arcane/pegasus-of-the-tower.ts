import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pegasus-of-the-tower',
  type: 'ally',
  name: 'Pegasus of the Tower',
  text: 'When it enters: draw the first Fae of your deck.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 155,
  cost: 2,
  tribe: 'fae',
  attack: 3,
  health: 5,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'fae')
  },
  ai: { value: 2, tags: ['draw', 'tribe'] },
  art: {
    subject: 'a fairy-tale fae creature, the pegasus of the tower, lunging forward, medieval magic order style'
  }
})
