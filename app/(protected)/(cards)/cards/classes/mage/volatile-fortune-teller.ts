import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn, damageAllAllies, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'volatile-fortune-teller',
  type: 'ally',
  name: 'Volatile Fortune Teller',
  text: 'When it enters: burn a random enemy ally (3). When it dies: deal 1 fire damage to every enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  element: 'fire',
  price: 1880,
  cost: 4,
  attack: 3,
  health: 11,
  onEnter(ctx) {
    const victim = randomAlly(ctx, ctx.opponent)
    const ref = victim && slotOf(ctx, victim)

    if (ref) {
      burn(ctx, ref, 3)
    }
  },
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a time-traveling adventurer, the volatile fortune teller, roaring, mage style'
  }
})
