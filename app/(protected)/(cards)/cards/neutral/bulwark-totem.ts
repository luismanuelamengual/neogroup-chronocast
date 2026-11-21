import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bulwark-totem',
  type: 'artifact',
  name: 'Bulwark Totem',
  text: 'Artifact. Every damage your hero takes is reduced by 2.',
  flavor: 'Carved from a wall that never fell.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 3,
  modifyDamage(ctx, target, amount) {
    return target.player === ctx.owner && target.slot === 'hero' ? amount - 2 : amount
  },
  ai: { value: 3 },
  art: {
    subject: 'a tall stone totem shaped like a fortress wall with glowing shield runes'
  }
})
