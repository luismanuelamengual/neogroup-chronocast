import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cloaking-module',
  type: 'attachment',
  subtype: 'implant',
  name: 'Cloaking Module',
  text: 'Attach to an ally of yours: it gains Stealth, and it gets it back at the start of each phase.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  keywords: ['stealth'],
  targets: ['friendlyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      grantKeyword(ctx, found.unit, 'stealth')
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Cloaking Module: a small shoulder-mounted device bending light around it into a shimmering hologram, in a dark alley, violet accents, neon cyberpunk future style'
  }
})
