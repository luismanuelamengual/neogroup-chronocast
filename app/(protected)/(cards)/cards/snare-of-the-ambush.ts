import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-ambush',
  type: 'ability',
  subtype: 'spell',
  name: 'Snare of the Ambush',
  text: "Return every enemy ally with Flying to its owner's hand.",
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (unit.keywords.includes('flying')) {
        returnToHand(ctx, unit)
      }
    }
  },
  ai: { value: 6, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Snare of the Ambush: a looped rope snare snapping shut, inside a cave of crystals, bursting toward the viewer, ivory accents, hunter style'
  }
})
