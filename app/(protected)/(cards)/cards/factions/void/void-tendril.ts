import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'void-tendril',
  type: 'ally',
  name: 'Void Tendril',
  text: '',
  flavor: 'One touch, and the void remembers you.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 10,
  health: 18,
  keywords: ['poison'],
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a giant black tentacle with glowing green suckers reaching out of a rift in space'
  }
})
