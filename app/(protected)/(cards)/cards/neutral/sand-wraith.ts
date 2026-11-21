import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sand-wraith',
  type: 'ally',
  name: 'Sand Wraith',
  text: '',
  flavor: 'You never see it coming. You only hear the sand.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 12,
  health: 8,
  keywords: ['stealth'],
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'a ghostly figure made of swirling sand with glowing eyes, emerging from a desert storm'
  }
})
