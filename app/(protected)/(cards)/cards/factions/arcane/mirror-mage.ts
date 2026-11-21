import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mirror-mage',
  type: 'ally',
  name: 'Mirror Mage',
  text: 'On enter: deal 6 damage to a random enemy ally.',
  flavor: 'Break the mirror, and there are two of him.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  health: 12,
  keywords: ['echo'],
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a mage stepping out of a tall ornate mirror, his reflection casting a different spell'
  }
})
