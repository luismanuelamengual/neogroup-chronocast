import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-woolly-rhino',
  type: 'ally',
  name: 'Tracking Woolly Rhino',
  text: 'When another Beast of yours enters: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  tribe: 'beast',
  attack: 5,
  health: 10,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'beast')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'an ice-age beast, the tracking woolly rhino, mid-leap, hunter style'
  }
})
