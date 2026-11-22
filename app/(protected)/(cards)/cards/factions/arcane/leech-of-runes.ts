import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leech-of-runes',
  type: 'attachment',
  name: 'Leech of Runes',
  text: 'Attach to an enemy ally: every damage it takes is 3 higher.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 3 : amount
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Leech of Runes: a glowing magical leech charm, medieval magic order style'
  }
})
