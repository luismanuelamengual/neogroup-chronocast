import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'riveted-tick',
  type: 'ability',
  name: 'Riveted Tick',
  text: 'You gain 4 Chronos this phase. Instant.',
  flavor: 'Every rivet, a second saved.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject:
      'Riveted Tick: a pocket watch mid-tick with glowing gears exploding outward, inside a cave of crystals, framed by drifting embers, amber accents, steampunk steam era style'
  }
})
