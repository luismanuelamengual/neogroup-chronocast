import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caeluss-axe',
  type: 'weapon',
  name: "Caelus's Axe",
  text: 'When it is equipped: your hero gains 5 armor.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
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
      "Caelus's Axe: a single axe made of copper with green patina, leaning against a ruined wall, bursting toward the viewer, cobalt blue accents, ancient bronze-age empire style"
  }
})
