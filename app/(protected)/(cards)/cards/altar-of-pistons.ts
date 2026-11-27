import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-pistons',
  type: 'artifact',
  name: 'Altar of Pistons',
  text: 'At the start of each phase: if you have 3 or more artifacts, your hero gains 2 energy.',
  flavor: 'Offerings of oil to the god of machines.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  onPhaseStart(ctx) {
    if (artifactCount(ctx) >= 3) {
      gainEnergy(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Altar of Pistons: an ancient altar made of ivory and jade, standing on a windy cliff, diagonal dynamic composition, saffron yellow accents, steampunk steam era style'
  }
})
