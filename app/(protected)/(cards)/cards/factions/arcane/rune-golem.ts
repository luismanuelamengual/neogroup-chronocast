import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rune-golem',
  type: 'ally',
  name: 'Rune Golem',
  text: '',
  flavor: 'Every rune on its body is a command it will never forget.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 20,
  health: 42,
  ai: { value: 5 },
  art: {
    subject: 'a massive stone golem covered in glowing blue runes, lumbering through a ruined wizard tower'
  }
})
