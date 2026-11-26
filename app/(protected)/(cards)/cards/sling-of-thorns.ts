import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sling-of-thorns',
  type: 'weapon',
  subtype: 'sling',
  name: 'Sling of Thorns',
  text: '',
  flavor: 'Every stone grows teeth.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  keywords: ['ranged'],
  attack: 4,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Sling of Thorns: a single sling made of gilded marble, resting on a velvet cloth, framed by drifting embers, teal accents, hunter style'
  }
})
