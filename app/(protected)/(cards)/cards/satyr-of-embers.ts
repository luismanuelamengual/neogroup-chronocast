import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'satyr-of-embers',
  type: 'ally',
  name: 'Satyr of Embers',
  text: 'When it enters: your other Fae gain +2 attack and +2 health.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 180,
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
    subject:
      'Satyr of Embers: a satyr with moss-green skin and flower hair and small curled horns, mid-stride, teal accents, medieval magic order style'
  }
})
