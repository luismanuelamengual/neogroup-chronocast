import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dawnlight-sentinel',
  type: 'ally',
  name: 'Dawnlight Sentinel',
  text: 'At the end of each phase: it heals completely.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 360,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 3,
  health: 12,
  onPhaseEnd(ctx) {
    const me = self(ctx)
    const ref = me ? slotOf(ctx, me) : null

    if (me && ref) {
      heal(ctx, ref, me.maxHealth)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dawnlight Sentinel: a towering legionnaire sentinel in gilded armor standing watch at a gate, wounds closing in golden light, mystic healer style'
  }
})
