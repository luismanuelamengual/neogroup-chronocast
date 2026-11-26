import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-plan',
  type: 'ability',
  name: 'Unbroken Plan',
  text: 'Draw the first Drifter of your deck and your hero heals 3.',
  flavor: 'The plan survived contact with the enemy.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'drifter')
    healHero(ctx, 3)
  },
  ai: { value: 2, tags: ['draw', 'heal', 'tribe'] },
  art: {
    subject:
      'Unbroken Plan: a battle map table with glowing pieces and arrows, in a dark forest clearing, close-up filling the frame, indigo accents, warrior style'
  }
})
