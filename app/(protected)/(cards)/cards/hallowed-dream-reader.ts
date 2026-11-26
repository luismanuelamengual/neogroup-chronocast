import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-dream-reader',
  type: 'ally',
  name: 'Hallowed Dream Reader',
  text: 'When it enters: your hero heals 7.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'light',
  resist: ['light'],
  price: 200,
  cost: 5,
  tribe: 'oracle',
  keywords: ['lifesteal'],
  attack: 5,
  health: 9,
  onEnter(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Hallowed Dream Reader: a petite adult woman with umber skin, charcoal grey hair in an undercut and a tattooed neck, dressed in a saffron chiton with gold arm bands, holding a sleeping lantern of dreams, with a mischievous wink, amber accents, mystic healer style'
  }
})
