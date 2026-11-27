import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'upgrade-broker',
  type: 'ally',
  name: 'Upgrade Broker',
  text: 'At the end of each phase: if you have 3 or more Enhanced allies, draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'cyborg',
  attack: 2,
  health: 7,
  onPhaseEnd(ctx) {
    if (enhancedAllies(ctx, ctx.owner).length >= 3) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Upgrade Broker: a slick cyborg dealer opening a briefcase full of glowing implants, full body, gold and cyan accents, neon cyberpunk future style'
  }
})
