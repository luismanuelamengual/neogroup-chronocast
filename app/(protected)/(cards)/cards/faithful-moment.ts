import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'faithful-moment',
  type: 'ability',
  subtype: 'gadget',
  name: 'Faithful Moment',
  text: 'You gain 4 Chronos this phase. Instant.',
  flavor: 'One second, kept forever.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Faithful Moment: a single drop of water frozen in mid-air with time ripples, against a starry sky, bursting toward the viewer, ivory accents, steampunk steam era style'
  }
})
