import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cyber-hound-of-the-grid',
  type: 'ally',
  name: 'Cyber Hound of the Grid',
  text: 'When it enters: if you have an Enhanced ally, it gains +2 attack and +2 health.',
  flavor: 'It sniffs out data like blood.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  weak: ['lightning'],
  price: 50,
  cost: 2,
  tribe: 'cyborg',
  keywords: ['quick'],
  attack: 3,
  health: 6,
  onEnter(ctx) {
    if (enhancedAllies(ctx, ctx.owner).length > 0) {
      buffSelf(ctx, 2, 2)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Cyber Hound of the Grid: a hound built of black iron with glowing coals, with bolted armor plates, hovering above the ground, neon cyberpunk future style'
  }
})
