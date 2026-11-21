import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'war-drum',
  type: 'artifact',
  name: 'War Drum',
  text: 'Artifact. Your allies have +2 attack, and so do the ones that enter later.',
  flavor: 'Every beat, a step forward.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 200,
  cost: 3,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 2, 0)
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 2, 0)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a huge war drum with leather skin and bone sticks, shockwaves of sound rippling out'
  }
})
