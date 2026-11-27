import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'javelin-of-the-wilds',
  type: 'weapon',
  subtype: 'harpoon',
  name: 'Javelin of the Wilds',
  text: 'When your hero attacks with it: the ally it hits becomes your Prey.',
  flavor: 'Thrown by the jungle, caught by nobody.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 3,
  durability: 2,
  onAttack(ctx, target) {
    markPrey(ctx, target)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Javelin of the Wilds: a single javelin made of blue steel with silver runes, on a fur rug, diagonal dynamic composition, amber accents, hunter style'
  }
})
