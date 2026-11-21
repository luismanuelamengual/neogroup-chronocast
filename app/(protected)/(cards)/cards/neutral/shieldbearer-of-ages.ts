import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'shieldbearer-of-ages',
  type: 'ally',
  name: 'Shieldbearer of Ages',
  text: '',
  flavor: 'Her shield bears the dents of a hundred battles, some not yet fought.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 7,
  health: 13,
  keywords: ['guardian'],
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'a tall woman holding a huge round shield covered in dents and engravings from many eras'
  }
})
