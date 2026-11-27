import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairWeapon, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-bound-disarm',
  type: 'ability',
  subtype: 'gadget',
  name: 'Spirit-Bound Disarm',
  text: 'The enemy weapon loses 2 durability and yours gains 2. Fast.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    repairWeapon(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Spirit-Bound Disarm: a sword flying out of reach, spinning through the air, in a misty valley, close-up filling the frame, ivory accents, mystic healer style'
  }
})
