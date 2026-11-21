import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'pterodactyl-rider',
  type: 'ally',
  name: 'Pterodactyl Rider',
  text: '',
  flavor: 'The first pilot in history. Also the first to crash.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 10,
  health: 8,
  keywords: ['flying'],
  ai: { value: 3 },
  art: {
    subject: 'a tribal warrior riding a large orange pterodactyl over a volcano, holding a bone spear'
  }
})
