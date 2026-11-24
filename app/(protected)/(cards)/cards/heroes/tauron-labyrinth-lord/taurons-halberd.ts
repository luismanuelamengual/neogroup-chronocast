import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'taurons-halberd',
  type: 'weapon',
  name: "Tauron's Halberd",
  text: 'When it is equipped: your hero gains 5 armor.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
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
      "Tauron's Halberd: a single halberd made of polished bronze with engraved spirals, resting on a velvet cloth, centered and seen from slightly below, gold accents, ancient bronze-age empire style"
  }
})
