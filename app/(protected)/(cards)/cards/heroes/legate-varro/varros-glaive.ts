import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'varros-glaive',
  type: 'weapon',
  name: "Varro's Glaive",
  text: 'When it is equipped: your hero gains 5 armor.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 5 },
  art: {
    subject: "Varro's Glaive: the legendary signature weapon of the hero, glowing, ancient bronze-age empire style"
  }
})
