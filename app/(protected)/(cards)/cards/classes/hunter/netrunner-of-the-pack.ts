import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'netrunner-of-the-pack',
  type: 'ally',
  name: 'Netrunner of the Pack',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 70,
  cost: 5,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 6,
  health: 11,
  ai: { value: 5 },
  art: {
    subject:
      'Netrunner of the Pack: a plump elderly android woman with a smooth metal scalp and heavy golden earrings, wearing a VR visor, dressed in a sleek bodysuit traced with light lines, typing on a floating keyboard, with a serene smile, teal accents, hunter style'
  }
})
