import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'holo-decoy',
  type: 'ally',
  name: 'Holo Decoy',
  text: '',
  flavor: 'Hit it all you want. It is not really there.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 3,
  health: 8,
  keywords: ['guardian'],
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject: 'a flickering cyan hologram of a soldier projected from a small floating drone'
  }
})
