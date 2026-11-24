import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-bound-disarm',
  type: 'ability',
  name: 'Spirit-Bound Disarm',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Spirit-Bound Disarm: a sword flying out of reach, spinning through the air, in a misty valley, close-up filling the frame, ivory accents, mystic healer style'
  }
})
