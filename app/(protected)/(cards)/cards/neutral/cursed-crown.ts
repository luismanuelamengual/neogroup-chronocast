import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-crown',
  type: 'attachment',
  name: 'Cursed Crown',
  text: 'Attach to an enemy ally: it cannot attack or use its ability, and every damage it takes is 2 higher.',
  flavor: 'Heavy is the head. Heavier still, the curse.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1500,
  cost: 4,
  targets: ['enemyAlly'],
  disarms: true,
  silences: true,
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 2 : amount
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a black iron crown with glowing green gems weighing down the head of a defeated king'
  }
})
