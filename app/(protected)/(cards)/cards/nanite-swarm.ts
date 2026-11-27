import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nanite-swarm',
  type: 'attachment',
  subtype: 'implant',
  name: 'Nanite Swarm',
  text: 'Attach to an ally of yours: at the start of each phase, it heals 3.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['friendlyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      heal(ctx, found.ref, 3)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Nanite Swarm: a glittering cloud of microscopic silver robots stitching a wound closed, close-up, teal accents, neon cyberpunk future style'
  }
})
