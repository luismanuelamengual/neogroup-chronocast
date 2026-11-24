import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'harpoon-of-the-ambush',
  type: 'weapon',
  name: 'Harpoon of the Ambush',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 65,
  cost: 4,
  keywords: ['ranged'],
  attack: 4,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject:
      'Harpoon of the Ambush: a single harpoon made of crystal and silver filigree, leaning against a ruined wall, centered and seen from slightly below, magenta accents, hunter style'
  }
})
