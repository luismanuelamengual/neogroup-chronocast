import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-tick',
  type: 'ability',
  subtype: 'gadget',
  name: 'Timeless Tick',
  text: 'You gain 3 Chronos this phase. Instant.',
  flavor: 'The clock that ticks for no one.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 3)
  },
  ai: { value: 1, tags: ['ramp'] },
  art: {
    subject:
      'Timeless Tick: a pocket watch mid-tick with glowing gears exploding outward, over a stormy battlefield, dramatic backlight, saffron yellow accents, steampunk steam era style'
  }
})
