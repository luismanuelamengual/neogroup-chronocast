import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { enhancedAllies, grantKeyword } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chrome-medic',
  type: 'ally',
  name: 'Chrome Medic',
  text: 'When it enters: your Enhanced allies gain Retaliate.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'cyborg',
  attack: 2,
  health: 6,
  onEnter(ctx) {
    for (const unit of enhancedAllies(ctx, ctx.owner)) {
      grantKeyword(ctx, unit, 'retaliate')
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Chrome Medic: a cyborg street medic woman with chrome arms and a glowing med-kit backpack, full body, cyan accents, neon cyberpunk future style'
  }
})
