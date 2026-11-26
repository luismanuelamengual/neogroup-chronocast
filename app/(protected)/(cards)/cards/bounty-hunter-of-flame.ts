import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bounty-hunter-of-flame',
  type: 'ally',
  name: 'Bounty Hunter of Flame',
  text: '',
  flavor: 'Wanted: anyone flammable.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  element: 'fire',
  price: 70,
  cost: 5,
  attack: 6,
  health: 12,
  ai: { value: 5 },
  art: {
    subject:
      'Bounty Hunter of Flame: a willowy elderly halfling woman with deep brown skin, silver hair in twin buns and heterochromatic eyes, wearing a bowler hat, dressed in a kimono with brass shoulder plates, holding a wanted poster and a coiled lasso, with wide-eyed wonder, turquoise accents, mage style'
  }
})
