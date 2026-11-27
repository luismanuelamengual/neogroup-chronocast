import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blood-pact',
  type: 'ability',
  subtype: 'ritual',
  name: 'Blood Pact',
  text: 'Your hero takes 5 shadow damage. You gain 3 Chronos this phase. Instant.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  speed: 'instant',
  onPlay(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 5, 'shadow')
    gainChronos(ctx, ctx.owner, 3)
  },
  ai: { value: 3 },
  art: {
    subject: 'Blood Pact: two hands clasped over a cracked hourglass, blood running into its sand, dark ritual mood'
  }
})
