import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalwart-street-samurai',
  type: 'ally',
  name: 'Stalwart Street Samurai',
  text: 'When it enters: your other Enforcers heal 6 and gain +1 attack.',
  flavor: 'Neon blade, old code.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 600,
  cost: 6,
  tribe: 'enforcer',
  attack: 9,
  health: 11,
  onEnter(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'enforcer', true)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 6)
      }

      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject:
      'Stalwart Street Samurai: a broad-shouldered middle-aged android man with a smooth metal scalp, a thin mustache and war paint stripes, wearing a fedora, dressed in a bulky riot exosuit, drawing a glowing katana, with wide-eyed wonder, teal accents, warrior style'
  }
})
