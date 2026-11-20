import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'abyssal-hound',
  type: 'ally',
  name: 'Abyssal Hound',
  text: '',
  flavor: 'It hunts the scent of fear across the end of time.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  health: 10,
  keywords: ['charge'],
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject: 'a skeletal hound with ultraviolet flames for fur bursting out of a portal of darkness'
  }
})
