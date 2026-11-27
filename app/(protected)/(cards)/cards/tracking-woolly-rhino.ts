import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-woolly-rhino',
  type: 'ally',
  name: 'Tracking Woolly Rhino',
  text: 'When another Beast of yours enters: your hero heals 2.',
  flavor: 'It follows a trail by smell, and ends it by charging.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  tribe: 'beast',
  keywords: ['retaliate'],
  attack: 5,
  health: 10,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'beast')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Tracking Woolly Rhino: a rhino with grey-brown fur dusted with frost and huge curved tusks, roaring with jaws wide open, emerald accents, hunter style'
  }
})
