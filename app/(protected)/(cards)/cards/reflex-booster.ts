import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'reflex-booster',
  type: 'attachment',
  subtype: 'implant',
  name: 'Reflex Booster',
  text: 'Attach to an ally of yours: each time it attacks, it gains +2 attack this phase.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  onHostAttack(ctx, host) {
    buffThisPhase(ctx, host, 2)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Reflex Booster: a spinal implant of chrome vertebrae with pulsing blue wires, on a rain-soaked steel table, cyan accents, neon cyberpunk future style'
  }
})
