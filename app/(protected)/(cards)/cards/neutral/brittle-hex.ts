import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brittle-hex',
  type: 'attachment',
  name: 'Brittle Hex',
  text: 'Attach to an enemy ally: every damage it takes is doubled.',
  flavor: 'Its skin turns to glass; its armor, to paper.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1500,
  cost: 3,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount * 2 : amount
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a warrior whose armor is cracking like glass under a purple hex sigil'
  }
})
