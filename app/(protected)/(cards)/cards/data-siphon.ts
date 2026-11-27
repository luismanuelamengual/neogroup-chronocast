import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'data-siphon',
  type: 'attachment',
  subtype: 'implant',
  name: 'Data Siphon',
  text: 'Attach to an ally of yours: each time it attacks, steal 1 energy from the enemy hero.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  targets: ['friendlyAlly'],
  onHostAttack(ctx) {
    if (drainEnergy(ctx, ctx.opponent, 1) > 0) {
      gainEnergy(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Data Siphon: a wrist implant with a cable spike pulling streams of glowing data, close-up, cyan accents, neon cyberpunk future style'
  }
})
