import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-disarm',
  type: 'ability',
  subtype: 'gadget',
  name: 'Battle-Scarred Disarm',
  text: 'The enemy weapon and armor lose 2 durability each. Fast.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 2)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Battle-Scarred Disarm: a sword flying out of reach, spinning through the air, in a dark forest clearing, framed by drifting embers, lime green accents, warrior style'
  }
})
