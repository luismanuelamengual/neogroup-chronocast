import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bone-crawler',
  type: 'ally',
  name: 'Bone Crawler',
  text: '',
  flavor: 'Kill it. It will be back by lunch.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 7,
  health: 6,
  keywords: ['echo'],
  ai: { value: 2 },
  art: {
    subject: 'a spider-like creature made of bones and black smoke skittering across floating ruins'
  }
})
