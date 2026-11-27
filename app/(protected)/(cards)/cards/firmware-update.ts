import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firmware-update',
  type: 'ability',
  subtype: 'program',
  name: 'Firmware Update',
  text: 'Your Enhanced allies gain +1 attack and +2 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    for (const unit of enhancedAllies(ctx, ctx.owner)) {
      buff(ctx, unit, 1, 2)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Firmware Update: a holographic progress bar hovering over a row of cyborgs, cables glowing, cyan accents, neon cyberpunk future style'
  }
})
