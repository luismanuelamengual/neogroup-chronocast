import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-plating',
  type: 'attachment',
  name: 'Hourglass Plating',
  text: 'Attach to an ally of yours: every damage it takes is reduced by 2.',
  flavor: 'Each blow arrives a little late, and a little weaker.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 180,
  cost: 2,
  targets: ['friendlyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount - 2 : amount
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'ornate bronze armor plates engraved with hourglasses, sand flowing inside them'
  }
})
