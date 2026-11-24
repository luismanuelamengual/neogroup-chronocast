import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patented-tick',
  type: 'ability',
  name: 'Patented Tick',
  text: 'Your hero gains 3 energy. Instant.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Patented Tick: a pocket watch mid-tick with glowing gears exploding outward, in a snowy pass, centered and seen from slightly below, ivory accents, steampunk steam era style'
  }
})
