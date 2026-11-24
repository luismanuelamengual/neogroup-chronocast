import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caeluss-axe',
  type: 'weapon',
  name: "Caelus's Axe",
  text: 'When it is equipped: your hero heals 5.',
  flavor: 'Taken from a king. Kept by a usurper.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Caelus's Axe: a single axe made of copper with green patina, leaning against a ruined wall, bursting toward the viewer, cobalt blue accents, ancient bronze-age empire style"
  }
})
