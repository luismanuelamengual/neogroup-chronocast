import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bounty-hunter-of-flame',
  type: 'ally',
  name: 'Bounty Hunter of Flame',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'fire',
  price: 70,
  cost: 5,
  attack: 6,
  health: 12,
  ai: { value: 5 },
  art: {
    subject: 'a time-traveling adventurer, the bounty hunter of flame, glaring at the viewer, mage style'
  }
})
