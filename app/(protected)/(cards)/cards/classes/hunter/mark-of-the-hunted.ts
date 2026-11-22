import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mark-of-the-hunted',
  type: 'attachment',
  name: 'Mark of the Hunted',
  text: 'Attach to an enemy ally: every damage it takes is 3 higher.',
  flavor: 'Once marked, there is nowhere to hide.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 65,
  cost: 1,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 3 : amount
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a glowing red target mark painted on the shield of a warrior, arrows pointing at it'
  }
})
