import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leech-of-mercy',
  type: 'attachment',
  name: 'Leech of Mercy',
  text: 'Attach to an enemy ally: every damage it takes is 3 higher.',
  flavor: 'It takes the pain away. And a little more.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'mythic',
  price: 4080,
  cost: 2,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 3 : amount
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Leech of Mercy: an enchanted leech made of gilded marble, on a mossy rock, seen from above, emerald accents, mystic healer style'
  }
})
