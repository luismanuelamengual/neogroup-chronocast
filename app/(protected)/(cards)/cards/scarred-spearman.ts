import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, heal, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-spearman',
  type: 'ally',
  name: 'Scarred Spearman',
  text: 'When a trap of yours goes off: it gains +2 attack this phase and heals 4.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'uncommon',
  resist: ['ice'],
  price: 220,
  cost: 6,
  tribe: 'caveborn',
  keywords: ['guardian', 'retaliate'],
  attack: 6,
  health: 14,
  onTrapTriggered(ctx) {
    const me = self(ctx)
    const ref = me ? slotOf(ctx, me) : null

    if (me && ref) {
      buffThisPhase(ctx, me, 2)
      heal(ctx, ref, 4)
    }
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      'Scarred Spearman: a lanky young man with light brown skin, blue-black hair with a side-swept fringe, a full beard and bushy eyebrows, dressed in ochre body paint and a reed skirt, thrusting a flint spear, with calm focus, gold accents, prehistoric jungle era style'
  }
})
