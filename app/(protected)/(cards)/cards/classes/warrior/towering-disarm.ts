import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'towering-disarm',
  type: 'ability',
  name: 'Towering Disarm',
  text: 'Destroy the enemy weapon. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'Towering Disarm: a sword and shield cracking and rusting apart, warrior style'
  }
})
