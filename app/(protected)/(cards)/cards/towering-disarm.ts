import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'towering-disarm',
  type: 'ability',
  name: 'Towering Disarm',
  text: 'Destroy the enemy weapon. Fast.',
  flavor: 'Drop it. Now.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Towering Disarm: a sword flying out of reach, spinning through the air, above a calm lake at dusk, dramatic backlight, magenta accents, warrior style'
  }
})
