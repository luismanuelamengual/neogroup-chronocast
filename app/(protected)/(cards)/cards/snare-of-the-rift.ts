import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-rift',
  type: 'ability',
  subtype: 'program',
  name: 'Snare of the Rift',
  text: 'Stun every enemy ally that has an attachment. Fast.',
  flavor: 'A trap set in one century, sprung in another.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (unit.attachments?.length) {
        stun(ctx, unit)
      }
    }
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Snare of the Rift: a looped rope snare snapping shut, over burning grassland, swirling around the center, lime green accents, neon cyberpunk future style'
  }
})
