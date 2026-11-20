import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunder-lizard',
  type: 'ally',
  name: 'Thunder Lizard',
  text: 'On enter: your allies heal 8.',
  flavor: 'When it walks, the rain falls upward.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  attack: 22,
  health: 54,
  keywords: ['guardian'],
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 8)
  },
  ai: { value: 7, tags: ['heal', 'defense'] },
  art: {
    subject: 'a colossal long-necked sauropod walking through a thunderstorm, lightning reflecting on its wet scales'
  }
})
