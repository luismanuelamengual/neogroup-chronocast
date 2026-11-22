import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leech-of-mercy',
  type: 'attachment',
  name: 'Leech of Mercy',
  text: 'Attach to an enemy ally: every damage it takes is 3 higher.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'mythic',
  price: 27000,
  cost: 2,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 3 : amount
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'Leech of Mercy: a glowing magical leech charm, mystic healer style'
  }
})
