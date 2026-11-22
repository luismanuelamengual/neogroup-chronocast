import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorraks-recurve-bow',
  type: 'weapon',
  name: "Gorrak's Recurve Bow",
  text: 'When it is equipped: deal 4 earth damage to a random enemy ally.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'gorrak-tyrant-king' },
  rarity: 'epic',
  element: 'earth',
  price: 1720,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5 },
  art: {
    subject: "Gorrak's Recurve Bow: the legendary signature weapon of the hero, glowing, prehistoric jungle era style"
  }
})
