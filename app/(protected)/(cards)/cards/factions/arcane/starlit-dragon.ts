import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'starlit-dragon',
  type: 'ally',
  name: 'Starlit Dragon',
  text: 'When it enters: stun a random enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['fire'],
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'drake',
  attack: 6,
  health: 8,
  onEnter(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a dragon-kin creature, the starlit dragon, standing guard, medieval magic order style'
  }
})
