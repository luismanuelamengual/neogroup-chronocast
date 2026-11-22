import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'satyr-of-embers',
  type: 'ally',
  name: 'Satyr of Embers',
  text: 'When it enters: your other Fae gain +2 attack and +2 health.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 190,
  cost: 4,
  tribe: 'fae',
  keywords: ['shield'],
  attack: 5,
  health: 5,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'fae', 2, 2, true)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject: 'a fairy-tale fae creature, the satyr of embers, lunging forward, medieval magic order style'
  }
})
