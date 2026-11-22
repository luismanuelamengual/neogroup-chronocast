import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-disarm',
  type: 'ability',
  name: 'Battle-Scarred Disarm',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'Battle-Scarred Disarm: a sword and shield cracking and rusting apart, warrior style'
  }
})
