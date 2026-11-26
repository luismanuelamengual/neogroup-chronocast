import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'taurons-halberd',
  type: 'weapon',
  name: "Tauron's Halberd",
  text: 'When it is equipped: your hero heals 5.',
  flavor: 'Forged in the heart of the labyrinth.',
  faction: 'bronze',
  restriction: { heroes: ['tauron-labyrinth-lord'] },
  rarity: 'epic',
  price: 1100,
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
      "Tauron's Halberd: a single halberd made of polished bronze with engraved spirals, resting on a velvet cloth, centered and seen from slightly below, gold accents, ancient bronze-age empire style"
  }
})
