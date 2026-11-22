import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nysas-bow',
  type: 'weapon',
  name: "Nysa's Bow",
  text: 'When it is equipped: deal 4 wind damage to a random enemy ally.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'epic',
  element: 'wind',
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
    subject: "Nysa's Bow: the legendary signature weapon of the hero, glowing, ancient bronze-age empire style"
  }
})
