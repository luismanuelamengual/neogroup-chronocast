import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-crossbow',
  type: 'weapon',
  name: 'Keen-Eyed Crossbow',
  text: 'When it is equipped: your hero heals 4.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 2 },
  art: {
    subject: 'Keen-Eyed Crossbow: a single crossbow weapon floating in dramatic light, hunter style'
  }
})
