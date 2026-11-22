import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kazhuls-longbow',
  type: 'weapon',
  name: "Kazhul's Longbow",
  text: 'When it is equipped: deal 4 fire damage to a random enemy ally.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kazhul-mother-of-ash' },
  rarity: 'epic',
  element: 'fire',
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
    subject: "Kazhul's Longbow: the legendary signature weapon of the hero, glowing, prehistoric jungle era style"
  }
})
