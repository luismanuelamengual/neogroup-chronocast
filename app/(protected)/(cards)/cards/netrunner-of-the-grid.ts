import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'netrunner-of-the-grid',
  type: 'ally',
  name: 'Netrunner of the Grid',
  text: 'When it enters: your other Netrunners gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 2,
  health: 9,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'netrunner', 1, 1, true)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Netrunner of the Grid: a towering adult woman with freckled fair skin, auburn hair cropped short and a crooked broken nose, dressed in an oversized hoodie with cables spilling out, typing on a floating keyboard, with calm focus, gold accents, neon cyberpunk future style'
  }
})
