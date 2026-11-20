import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cave-scout',
  type: 'ally',
  name: 'Cave Scout',
  text: '',
  flavor: 'She knows every cave. And what lives in them.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 5,
  health: 8,
  keywords: ['quick'],
  ai: { value: 1 },
  art: {
    subject: 'a nimble cave girl with a torch and a stone knife peeking out of a dark cave mouth'
  }
})
