import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-glaive',
  type: 'weapon',
  subtype: 'scythe',
  name: 'Bloodied Glaive',
  text: 'When your hero attacks with it: if your discard pile has 10 or more cards, your hero heals 3.',
  flavor: 'Cleaned once. Never again.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 3,
  durability: 2,
  onAttack(ctx) {
    if (discardSize(ctx, ctx.owner) >= 10) {
      healHero(ctx, 3)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Bloodied Glaive: a single glaive made of copper with green patina, in a beam of light from above, close-up filling the frame, violet accents, warrior style'
  }
})
