import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ryns-mace',
  type: 'weapon',
  name: "Ryn's Mace",
  text: 'When it is equipped: your hero gains 5 armor.',
  flavor: 'It crackles with every swing.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
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
    subject:
      "Ryn's Mace: a single mace made of copper with green patina, floating above a marble pedestal, seen from above, rose pink accents, neon cyberpunk future style"
  }
})
