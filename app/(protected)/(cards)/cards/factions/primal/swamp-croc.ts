import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'swamp-croc',
  type: 'ally',
  name: 'Swamp Croc',
  text: '',
  flavor: 'It has been waiting in this swamp since before the dinosaurs.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 11,
  health: 24,
  ai: { value: 3 },
  art: {
    subject: 'a giant crocodile with mossy armored scales lurking half-submerged in a steaming swamp'
  }
})
