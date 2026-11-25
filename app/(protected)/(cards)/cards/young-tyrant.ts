import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'young-tyrant',
  type: 'ally',
  name: 'Young Tyrant',
  text: 'When it attacks: your hero heals 2.',
  flavor: 'A king in the making, a tyrant already.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  weak: ['ice'],
  price: 40,
  cost: 1,
  tribe: 'saurian',
  attack: 3,
  health: 3,
  onAttack(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 1, tags: ['aggro', 'heal'] },
  art: {
    subject:
      'Young Tyrant: a tyrant with a sandy gold hide with brown speckles and glowing amber eyes, leaping forward, scarlet accents, prehistoric jungle era style'
  }
})
