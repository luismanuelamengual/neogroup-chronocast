import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'koras-blowgun',
  type: 'weapon',
  name: "Kora's Blowgun",
  text: 'When it is equipped: deal 4 wind damage to a random enemy ally.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
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
    subject: "Kora's Blowgun: the legendary signature weapon of the hero, glowing, prehistoric jungle era style"
  }
})
