import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, wearArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-disarm',
  type: 'ability',
  subtype: 'gadget',
  name: 'Battle-Scarred Disarm',
  text: 'The enemy armor loses 2 durability and the enemy hero takes 3 damage. Fast.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearArmor(ctx, ctx.opponent, 2)
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Battle-Scarred Disarm: a sword flying out of reach, spinning through the air, in a dark forest clearing, framed by drifting embers, lime green accents, warrior style'
  }
})
