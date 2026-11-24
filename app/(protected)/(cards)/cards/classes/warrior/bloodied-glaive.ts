import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-glaive',
  type: 'weapon',
  name: 'Bloodied Glaive',
  text: 'When it is equipped: your hero heals 4.',
  flavor: 'Cleaned once. Never again.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
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
    subject:
      'Bloodied Glaive: a single glaive made of copper with green patina, in a beam of light from above, close-up filling the frame, violet accents, warrior style'
  }
})
