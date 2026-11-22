import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vexs-sling',
  type: 'weapon',
  name: "Vex's Sling",
  text: 'When it is equipped: deal 4 shadow damage to a random enemy ally.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'epic',
  element: 'shadow',
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
    subject: "Vex's Sling: the legendary signature weapon of the hero, glowing, neon cyberpunk future style"
  }
})
