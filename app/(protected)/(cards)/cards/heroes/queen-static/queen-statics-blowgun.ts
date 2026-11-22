import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-statics-blowgun',
  type: 'weapon',
  name: "Queen Static's Blowgun",
  text: 'When it is equipped: deal 4 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'epic',
  element: 'lightning',
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
    subject: "Queen Static's Blowgun: the legendary signature weapon of the hero, glowing, neon cyberpunk future style"
  }
})
