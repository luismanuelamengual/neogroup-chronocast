import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nameless-saddle',
  type: 'attachment',
  subtype: 'mount',
  name: 'Nameless Saddle',
  text: 'Attach to an ally of yours: it gains +2 attack and +3 health. When that ally attacks: it gains +1 attack.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 2,
  health: 3,
  targets: ['friendlyAlly'],
  onHostAttack(ctx, unit) {
    buff(ctx, unit, 1, 0)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Nameless Saddle: an enchanted saddle made of chrome with neon light strips, on a workbench with tools, seen from above, teal accents, prehistoric jungle era style'
  }
})
