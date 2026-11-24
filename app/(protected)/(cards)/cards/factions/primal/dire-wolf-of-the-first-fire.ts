import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dire-wolf-of-the-first-fire',
  type: 'ally',
  name: 'Dire Wolf of the First Fire',
  text: 'When another Beast of yours enters: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  element: 'fire',
  price: 510,
  cost: 2,
  tribe: 'beast',
  keywords: ['thorns', 'retaliate'],
  thorns: 3,
  attack: 3,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'beast')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Dire Wolf of the First Fire: a wolf with grey-brown fur dusted with frost and massive sabre fangs, leaping forward, teal accents, prehistoric jungle era style'
  }
})
