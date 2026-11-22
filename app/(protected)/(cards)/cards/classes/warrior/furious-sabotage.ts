import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-sabotage',
  type: 'ability',
  name: 'Furious Sabotage',
  text: 'Destroy the enemy weapon. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject: 'Furious Sabotage: a sword and shield cracking and rusting apart, warrior style'
  }
})
