import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pyromancer',
  type: 'ally',
  name: 'Pyromancer',
  text: 'On enter: deal 8 damage to a random enemy ally.',
  flavor: 'She was told to light the fireplace. She lit the castle.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 13,
  health: 12,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 8)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a fiery-haired pyromancer conjuring a whirling ball of flame between her hands'
  }
})
