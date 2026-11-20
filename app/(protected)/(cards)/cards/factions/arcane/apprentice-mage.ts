import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'apprentice-mage',
  type: 'ally',
  name: 'Apprentice Mage',
  text: 'On enter: deal 4 damage to a random enemy ally.',
  flavor: 'Aims for the target. Usually hits something.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 55,
  cost: 1,
  attack: 4,
  health: 8,
  keywords: ['ranged'],
  onEnter(ctx) {
    const target = randomAlly(ctx, ctx.opponent)
    const slot = target ? slotOf(ctx, target) : null

    if (slot) {
      damage(ctx, slot, 4)
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'a clumsy young wizard apprentice with an oversized hat, a spark of blue magic shooting wildly from his wand'
  }
})
