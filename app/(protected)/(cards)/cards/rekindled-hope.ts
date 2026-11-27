import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveLastDefeated } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rekindled-hope',
  type: 'ability',
  subtype: 'tactic',
  name: 'Rekindled Hope',
  text: 'The last ally of yours that died returns to play.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 380,
  cost: 4,
  onPlay(ctx) {
    reviveLastDefeated(ctx, ctx.owner)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Rekindled Hope: a fallen knight rising from embers wrapped in a column of warm golden light, petals swirling around, mystic healer style'
  }
})
