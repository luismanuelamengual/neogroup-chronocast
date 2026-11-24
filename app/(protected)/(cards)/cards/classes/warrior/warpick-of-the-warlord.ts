import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warpick-of-the-warlord',
  type: 'weapon',
  name: 'Warpick of the Warlord',
  text: 'When it is equipped: your hero heals 3.',
  flavor: 'It has broken crowns.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  attack: 2,
  durability: 2,
  onPlay(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 1 },
  art: {
    subject:
      'Warpick of the Warlord: a single warpick made of white bone and leather wraps, on a mossy rock, bursting toward the viewer, lime green accents, warrior style'
  }
})
