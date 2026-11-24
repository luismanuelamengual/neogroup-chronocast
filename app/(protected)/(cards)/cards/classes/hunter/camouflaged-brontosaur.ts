import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'camouflaged-brontosaur',
  type: 'ally',
  name: 'Camouflaged Brontosaur',
  text: 'When it attacks: deal 3 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 220,
  cost: 6,
  tribe: 'saurian',
  keywords: ['stealth'],
  attack: 7,
  health: 12,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject:
      'Camouflaged Brontosaur: a brontosaur with a teal hide with a pearly belly and glowing amber eyes, rearing up, scarlet accents, hunter style'
  }
})
