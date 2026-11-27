import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-collector',
  type: 'ally',
  name: 'Bone Collector',
  text: 'When it enters: the last ally of your discard pile returns to your hand.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'undead',
  attack: 2,
  health: 6,
  onEnter(ctx) {
    alliesToHand(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Bone Collector: a skeletal scavenger dragging a sack full of bones through a graveyard, full body, pale violet accents, dark end-of-time void style'
  }
})
