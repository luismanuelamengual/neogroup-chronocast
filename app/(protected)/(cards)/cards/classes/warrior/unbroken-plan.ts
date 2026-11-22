import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-plan',
  type: 'ability',
  name: 'Unbroken Plan',
  text: 'Draw the first Drifter of your deck and your hero heals 3.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'drifter')
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal', 'tribe'] },
  art: {
    subject: 'Unbroken Plan: glowing cards and runes swirling out of an open book, warrior style'
  }
})
