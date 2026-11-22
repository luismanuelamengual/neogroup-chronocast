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
    subject: 'a cyberpunk hacker with holographic screens, the netrunner of the pack, mid-leap, hunter style'
  }
})
