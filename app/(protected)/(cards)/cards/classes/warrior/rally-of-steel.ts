import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-steel',
  type: 'ability',
  name: 'Rally of Steel',
  text: 'Your Colossi gain +1 attack and +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  onPlay(ctx) {
    buffTribe(ctx, ctx.owner, 'colossus', 1, 2)
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject: 'Rally of Steel: a warrior surrounded by a surging aura of power, warrior style'
  }
})
