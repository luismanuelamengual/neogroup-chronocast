import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'timeworn-champion',
  type: 'ally',
  name: 'Timeworn Champion',
  text: '',
  flavor: 'He fought in every final battle. Twice.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 22,
  health: 18,
  keywords: ['frenzy'],
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject: 'a champion with a cracked crown and two swords, striking in a blur of motion'
  }
})
