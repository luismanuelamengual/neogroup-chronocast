import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-plate',
  type: 'armor',
  name: 'Storm Plate',
  text: 'At the start of each phase: deal 2 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2320,
  element: 'lightning',
  cost: 4,
  keywords: ['unique'],
  armor: 3,
  durability: 4,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Storm Plate: a single plate made of chrome with neon light strips, crackling with forked lightning, in a beam of light from above, bursting toward the viewer, cobalt blue accents'
  }
})
