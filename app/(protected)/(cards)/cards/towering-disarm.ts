import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroySupportAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'towering-disarm',
  type: 'ability',
  subtype: 'gadget',
  name: 'Towering Disarm',
  text: 'Destroy an enemy artifact or face-down trap. Fast.',
  flavor: 'Drop it. Now.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    destroySupportAt(ctx, ctx.targets[0])
  },
  targets: ['enemyArtifact'],
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Towering Disarm: a sword flying out of reach, spinning through the air, above a calm lake at dusk, dramatic backlight, magenta accents, warrior style'
  }
})
