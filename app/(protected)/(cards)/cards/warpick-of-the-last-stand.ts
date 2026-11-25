import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'warpick-of-the-last-stand',
  type: 'weapon',
  name: 'Warpick of the Last Stand',
  text: '',
  flavor: 'Carried by those who refuse to fall back.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Warpick of the Last Stand: a single warpick made of blackened iron with gold inlay, stuck in the sand, seen from above, amber accents, warrior style'
  }
})
